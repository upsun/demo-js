# https://github.com/gorakhargosh/watchdog
# https://pypi.org/project/requests/
# https://philipkiely.com/code/python_watchdog.html
# Combined the above script with the one on the repo
# _But_ we're dealing with Network mounted drives https://www.pythonanywhere.com/forums/topic/7521/
# ... so we need to use the PollingObserver class https://python-watchdog.readthedocs.io/en/stable/_modules/watchdog/observers/polling.html
# inotify only available on Linux, which doesn't match my local env

import os
import sys
import time
import datetime
import requests
import logging
# from watchdog.observers import Observer
from watchdog.observers.polling import PollingObserver
from watchdog.events import FileSystemEventHandler

class Watcher:

    def __init__(self, directory=".", handler=FileSystemEventHandler()):
        # self.observer = Observer()
        self.observer = PollingObserver()
        self.handler = handler
        self.directory = directory

    def run(self):
        self.observer.schedule(
            self.handler, self.directory, recursive=True)
        self.observer.start()
        print("\nWatcher Running in {}/\n".format(self.directory))
        try:
            while True:
                time.sleep(1)
        except:
            self.observer.stop()
        self.observer.join()
        print("\nWatcher Terminated\n")

class MyHandler(FileSystemEventHandler):

    webhook_url = "https://webhook.site/cc04606b-25eb-45d5-8e55-31fa4438db0a"

    if os.environ.get("WATCH_WEBHOOK_URL") is not None:
        webhook_url = os.environ["WATCH_WEBHOOK_URL"]

    logging.basicConfig(level=logging.INFO,
                    format='%(asctime)s - %(message)s',
                    datefmt='%Y-%m-%d %H:%M:%S')

    def on_any_event(self, event):
        uninteresting_events = ["closed", "opened"]
        if ( not event.is_directory ) and ( event.event_type not in uninteresting_events ):
            print(dir(event))
            event_data = {
                "src_path": event.src_path,
                "dest_path": event.dest_path,
                "event_type": event.event_type,
                "is_directory": event.is_directory,
                "is_synthetic": event.is_synthetic,
                "timestamp": datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S%z")
            }
            logging.info(f'{event.event_type.upper()!r}: {event_data!r}')
            resp = requests.post(self.webhook_url, json = event_data)
            alert_data = {
                "status_code": resp.status_code,
                "url": resp.url
            }
            logging.info(f'{"FORWARDED".upper()!r}: {alert_data!r}')

if __name__=="__main__":
    watchpath = sys.argv[1] if len(sys.argv) > 1 else '.'
    w = Watcher(watchpath, MyHandler())
    w.run()