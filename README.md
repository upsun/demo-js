<p align="center">
<a href="https://www.upsun.com/">
<img src="utils/logo.svg" width="300px">
</a>
</p>

<p align="center">
<a href="https://github.com/upsun/demo-nix-js/issues">
<img src="https://img.shields.io/github/issues/upsun/demo-nix-js.svg?style=for-the-badge&labelColor=f4f2f3&color=6046FF&label=Issues" alt="Open issues" />
</a>&nbsp&nbsp
<a href="https://github.com/upsun/demo-nix-js/pulls">
<img src="https://img.shields.io/github/issues-pr/upsun/demo-nix-js.svg?style=for-the-badge&labelColor=f4f2f3&color=6046FF&label=Pull%20requests" alt="Open PRs" />
</a>&nbsp&nbsp
<a href="https://github.com/upsun/demo-nix-js/blob/main/LICENSE.md">
<img src="https://img.shields.io/static/v1?label=License&message=MIT&style=for-the-badge&labelColor=f4f2f3&color=6046FF" alt="License" />
</a>&nbsp&nbsp
<br /><br />

<p align="center">
<strong>Contribute and check out our resources!</strong>
<br />
<br />
<a href="https://discord.gg/PkMc2pVCDV"><strong>Join us on Discord</strong></a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
<a href="https://upsun.com/"><strong>Website</strong></a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
<a href="https://upsun.com/features/"><strong>Features</strong></a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
<a href="https://docs.upsun.com"><strong>Documentation</strong></a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
<a href="https://upsun.com/pricing/"><strong>Pricing</strong></a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
<a href="https://upsun.com/blog/"><strong>Blog</strong></a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
<br /><br />
</p>

<!-- <p align="center">
<a href="https://console.upsun.com/projects/create-project/?template=https://github.com/upsun/demo-nix-js.git&utm_campaign=deploy_on_up?utm_medium=button&utm_source=event_dotjs&utm_content=event_dotjs" target="_blank" title="Deploy with Upsun"><img src="utils/dou-button.svg" width="175px"></a>
</p> -->

## About

This is a simple demo project meant to introduce you to working with Javascript runtimes on [Upsun](https://upsun.com).

## Getting started

1. Visit [the Upsun website](https://auth.upsun.com/register?) to register for a trial account. 
    Complete the information and finish sign up.
1. Create your first organization where the project will live.
1. Choose the **Deploy an existing local Git repository** option.
1. Name the project, and provide a region for it to be deployed. 
    Keep the **Production environment name** as the default `main`.
    Consider selecting a **Green region** (indicated with a green leaf) where carbon impact is lowest.
1. Followow the instructions on the resulting screen to:
    - Install the Upsun CLI
    - Clone this repository

        ```bash
        git clone git@github.com:upsun/demo-nix-js.git && cd demo-nix-js
        ```
    
    - Connect your local project to Upsun

        ```bash
        upsun project:set-remote GENERATED_PROJECT_ID
        ```
1. Since Upsun configuration has already been committed to the repo, push to Upsun using the CLI:

    ```bash
    upsun push
    ```

When the activity has completed, you will be able to visit the deployed project from its generated URL, which you can find with the command

```bash
upsun url
```

## What is deployed

This project leverages the Upsun [composable image](https://docs.upsun.com/create-apps/app-reference/composable-image.html) application container syntax, which is built on [Nix](https://nix.dev/) and [Nixpkgs](https://search.nixos.org/packages) under the hood. 

```bash
.
├── .git
├── .gitignore
├── .upsun
│   └── config.yaml
├── README.md
├── bun
│   └── ...
├── deno
│   └── ...
├── main
│   └── ...
├── nodejs
│   └── ...
└── utils
```

It is comprised of four [application containers ](https://docs.upsun.com/create-apps.html):

- `bun`: 

    - a simple [bun](https://bun.sh/)-based application, deployed with the [`bun` Nix package](https://search.nixos.org/packages?channel=24.05&show=bun&from=0&size=50&sort=relevance&type=packages&query=bun).
    - configuration to deploy this app can be found under the [`applications.bun_app` key](https://github.com/upsun/demo-nix-js/blob/main/.upsun/config.yaml#L21) in `.upsun/config.yaml`.

- `deno`: 

    - a simple [deno](https://deno.com/)-based application, deployed with the [`bun` Nix package](https://search.nixos.org/packages?channel=24.05&show=deno&from=0&size=50&sort=relevance&type=packages&query=deno).
    - configuration to deploy this app can be found under the [`applications.deno_app` key](https://github.com/upsun/demo-nix-js/blob/main/.upsun/config.yaml#L48) in `.upsun/config.yaml`.

- `nodejs`: 

    - a simple [Node.js](https://nodejs.org/en)-based application, deployed with the [`nodejs` Nix package](https://search.nixos.org/packages?channel=24.05&from=0&size=50&sort=relevance&type=packages&query=nodejs).
    - configuration to deploy this app can be found under the [`applications.nodejs_app` key](https://github.com/upsun/demo-nix-js/blob/main/.upsun/config.yaml#L34) in `.upsun/config.yaml`.

- `main`: 

    - a basic [Astro](https://astro.build/) applications, deployed with the [`nodejs` Nix package](https://search.nixos.org/packages?channel=24.05&from=0&size=50&sort=relevance&type=packages&query=nodejs).
    - configuration to deploy this app can be found under the [`applications.main_app` key](https://github.com/upsun/demo-nix-js/blob/main/.upsun/config.yaml#L3) in `.upsun/config.yaml`.

Each of these applications' configuration can be found in the shared `.upsun/config.yaml` file.

When deployed to the [Upsun management console](https://console.upsun.com) they will appear like this:

<p align="center">
<img src="utils/graph.png" width="500px">
</p>

