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
1. Follow the instructions on the resulting screen to:
    - [Install the Upsun CLI](https://docs.upsun.com/administration/cli.html)
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

It is organized as to use [Turborepo](https://turbo.build/repo), a high-performance build system that simplifies (for this project) local development.

```bash
.
├── .git
├── .gitignore
├── .upsun
│   └── config.yaml
├── apps
│   ├── bun
│   │   └── ...
│   ├── deno
│   │   └── ...
│   ├── main
│   │   └── ...
│   └── nodejs
│       └── ...
├── utils
│   └── ...
├── LICENSE.md
├── README.md
├── package-lock.json
├── package.json
├── shell.nix
└── turbo.json
```

It is comprised of four [application containers ](https://docs.upsun.com/create-apps.html):

- `bun`: 

    - a simple [bun](https://bun.sh/)-based application, deployed with the [`bun` Nix package](https://search.nixos.org/packages?channel=24.05&show=bun&from=0&size=50&sort=relevance&type=packages&query=bun).
    - configuration to deploy this app can be found under the [`applications.bun_app` key](https://github.com/upsun/demo-nix-js/blob/main/.upsun/config.yaml#L21) in `.upsun/config.yaml`.

- `deno`: 

    - a simple [deno](https://deno.com/)-based application, deployed with the [`deno` Nix package](https://search.nixos.org/packages?channel=24.05&show=deno&from=0&size=50&sort=relevance&type=packages&query=deno).
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

## Next steps

### 1. Update production resources

Upsun automatically [configures default resources for each application](https://docs.upsun.com/manage-resources/adjust-resources.html) on the production environment (**Main**), which you can view with the CLI command `upsun resources:set`:

```bash
$ upsun resources:set
Resource configuration for the project YOUR_PROJECT_NAME (PROJECT_ID), environment main (type: production):
+----------------+------+-----+-------------+-----------+-----------+
| App or service | Size | CPU | Memory (MB) | Disk (MB) | Instances |
+----------------+------+-----+-------------+-----------+-----------+
| bun_app        | 0.5  | 0.5 | 224         |           | 1         |
| deno_app       | 0.5  | 0.5 | 224         |           | 1         |
| main_app       | 0.5  | 0.5 | 224         |           | 1         |
| nodejs_app     | 0.5  | 0.5 | 224         |           | 1         |
+----------------+------+-----+-------------+-----------+-----------+
```

You can reuse this same command to reduce the resources of each application to their minimum sizes:

```bash
$ upsun resources:set --size '*:0.1' --disk '*:0'

...

Summary of changes:
  App: bun_app
    CPU: decreasing from 0.5 to 0.1
    Memory: decreasing from 224 MB to 64 MB
  App: deno_app
    CPU: decreasing from 0.5 to 0.1
    Memory: decreasing from 224 MB to 64 MB
  App: main_app
    CPU: decreasing from 0.5 to 0.1
    Memory: decreasing from 224 MB to 64 MB
  App: nodejs_app
    CPU: decreasing from 0.5 to 0.1
    Memory: decreasing from 224 MB to 64 MB

Are you sure you want to continue? [Y/n]
```

You can also increase the number of instances of any application when desired:

```bash
$ upsun resources:set --count 'main_app:2' --disk '*:0'       

...

Summary of changes:
  App: main_app
    Instance count: increasing from 1 to 2
```

> [!NOTE]
> While the **resource allocation** activity executes on your production environment, view its log by clicking the three vertical dots on the far right side of the component. 
> Notice as that activity runs, that each of the applications is **not** rebuilt (the _Reusing existing build..._ text below). 
> ```bash
> Configuring resources
>  Updating 'main_app' resources from 0.5 CPU, 224MB RAM to 0.1 CPU, 64MB RAM.
>  Updating 'bun_app' resources from 0.5 CPU, 224MB RAM to 0.1 CPU, 64MB RAM.
>  Updating 'nodejs_app' resources from 0.5 CPU, 224MB RAM to 0.1 CPU, 64MB RAM.
>  Updating 'deno_app' resources from 0.5 CPU, 224MB RAM to 0.1 CPU, 64MB RAM.
>
> Building application 'main_app' (runtime type: generic:2023.1, tree: db728ad)
>  Reusing existing build for this tree ID
>
> Building application 'bun_app' (runtime type: generic:2023.1, tree: 37066a9)
>  Reusing existing build for this tree ID
>
> Building application 'nodejs_app' (runtime type: generic:2023.1, tree: e6f7918)
>  Reusing existing build for this tree ID
>
> Building application 'deno_app' (runtime type: generic:2023.1, tree: 750397e)
>  Reusing existing build for this tree ID
>
> ...
>
> ```
>
> Above all else, **this** is the principal feature of Upsun.
> The configuration file `.upsun/config.yaml` enables DevOps workflows and infrastructure-as-code,
> but it is this - reusable build images that are environment-independent - that allow you to 
> provision truly identical preview environments at all will to test your revisions.
>
> **See how in the next section.**

In the Upsun console, you can view resource consumption over time for each of the containers in the environment's cluster to determine how best resources should be adjusted.

<p align="center">
<img src="utils/resources.png">
</p>

### 2. Local development

This demo includes two methods for local development. 

- [Using local runtimes](#local-runtimes)
- [Using Nix](#nix)

Both methods require that you have the [Upsun CLI installed](https://docs.upsun.com/administration/cli.html), and they assume you have already followed the above steps to deploy the project on Upsun.

#### Local runtimes

**Requirements:**

- [Node.js 22](https://nodejs.org/en/download/package-manager)
- [Deno](https://deno.com/)
- [Bun](https://bun.sh/)

**Run:**

1. Build the apps:

```bash
./utils/local.sh
```

2. Run the local servers:

```bash
npm run start
```

#### Nix

This project leverages the Upsun [composable image](https://docs.upsun.com/create-apps/app-reference/composable-image.html) application container syntax, which is built on [Nix](https://nix.dev/) and [Nixpkgs](https://search.nixos.org/packages) under the hood. 

We can use Nix to replicate the production environment locally, downloading each runtime in isolation instead of doing so manually as is shown above.

**Requirements:**

- [Nix](https://nixos.org/download/)

**Run:**

1. Build the apps:

```bash
nix-shell
```

> [!NOTE]
> The first time you run this command will take some time, but only on that first time. 

2. Cleanup when finished:

Exit the Nix shell (Ctrl + C, then Ctrl + D), then run: 

```bash
nix-collect-garbage
```

### 3. Make a revision

In your local environment, run the command:

```bash
upsun environment new-feature main
```

Follow the prompts. 
This will create a new environment - which is _an exact clone_ of production, including its data (see the Node.js path (`/nodejs`)) to verify this.
Feel free to use the [local development](#2-local-development) instructions to make a revision, push to Upsun (`upsun push`), and test in the isolated space using production data.

When you're satisfied, feel free to `upsun merge` to promote your revisions into production.

Ultimately, this is the workflow that makes Upsun standout amongst other providers. 
While you may favor an integration to GitHub or GitLab over this local example, being able to iteratively improve your applications with _true staging environments_ in this way brings you a lot of power. 

### 4. Do the demo

If you're looking to understand even more about the Upsun development workflow, follow the steps to spin up the [Upsun Demo Project](https://github.com/platformsh/demo-project/tree/main).

### 5. Join the Community

There are far more concepts than could be explored in a single demo project, talk, or blog post. 
But we have some of the best minds in web development and computing ready and excited to help with your side project, experiment, or next big idea.

[Join us on Discord and less us help you get going](https://discord.gg/PkMc2pVCDV)!

### 6. Testing notifications

TBD