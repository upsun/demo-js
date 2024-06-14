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

<p align="center">
<a href="https://console.platform.sh/projects/create-project/?template=https://raw.githubusercontent.com/platformsh/template-builder/master/templates/drupal9/.platform.template.yaml&utm_campaign=deploy_on_platform?utm_medium=button&utm_source=affiliate_links&utm_content=https://raw.githubusercontent.com/platformsh-templates/drupal9/updates/.platform.template.yaml" target="_blank" title="Deploy with Platform.sh"><img src="utils/dou-button.svg" width="175px"></a>
</p>

## About

This is a simple demo project meant to introduce you to working with Javascript runtimes on [Upsun](https://upsun.com).

It leverages the [https://docs.upsun.com/create-apps/app-reference/composable-image.html](composable image) application container syntax, which is built on [Nix](https://nix.dev/) and [Nixpkgs](https://search.nixos.org/packages) under the hood. 

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

- `bun`: a simple [bun](https://bun.sh/)-based application, deployed with the [`bun` Nix package](https://search.nixos.org/packages?channel=24.05&show=bun&from=0&size=50&sort=relevance&type=packages&query=bun).
- `deno`: a simple [deno](https://deno.com/)-based application, deployed with the [`bun` Nix package](https://search.nixos.org/packages?channel=24.05&show=deno&from=0&size=50&sort=relevance&type=packages&query=deno).
- `nodejs`: a simple [Node.js](https://nodejs.org/en)-based application, deployed with the [`nodejs` Nix package](https://search.nixos.org/packages?channel=24.05&from=0&size=50&sort=relevance&type=packages&query=nodejs).
- `main`: a basic [Astro](https://astro.build/) applications, deployed with the [`nodejs` Nix package](https://search.nixos.org/packages?channel=24.05&from=0&size=50&sort=relevance&type=packages&query=nodejs).

Each of these applications' configuration can be found in the shared `.upsun/config.yaml` file.

When deployed to the [Upsun management console](https://console.upsun.com) they will appear like this:

<p align="center">
<img src="utils/graph.png" width="500px">
</p>

## Getting started


1. Visit [the Upsun website](https://auth.upsun.com/register?) to register for a trial account. Complete the information and finish sign up.
1. Create your first organization where the project will live.
1. Choose the **Deploy an existing local Git repository** option.
1. 

If you already have access to Upsun:

- Visit the Upsun Console (https://console.upsun.com/projects/create-project) to create a new project
- Create or select an organization to run the demo on
- Click **Explore Upsun** to start the demo

