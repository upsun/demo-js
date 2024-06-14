---
layout: ../layouts/Layout.astro
---

<Layout title="Welcome to Astro.">
	<main>

<p align="center">
<a href="https://www.upsun.com/">
<img src="/logo.svg" width="300px">
</a>
</p>

<p align="center">
<a href="https://github.com/platformsh/demo-project/issues">
<img src="https://img.shields.io/github/issues/platformsh/demo-project.svg?style=for-the-badge&labelColor=f4f2f3&color=6046FF&label=Issues" alt="Open issues" />
</a>&nbsp&nbsp
<a href="https://github.com/platformsh/demo-project/pulls">
<img src="https://img.shields.io/github/issues-pr/platformsh/demo-project.svg?style=for-the-badge&labelColor=f4f2f3&color=6046FF&label=Pull%20requests" alt="Open PRs" />
</a>&nbsp&nbsp
<a href="https://github.com/platformsh/demo-project/blob/main/LICENSE">
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

## About

This is a simple demo project meant to introduce you to working with Javascript runtimes on [Upsun](https://upsun.com).

It leverages the [composable image](https://docs.upsun.com/create-apps/app-reference/composable-image.html) application container syntax, which is built on [Nix](https://nix.dev/) and [Nixpkgs](https://search.nixos.org/packages) under the hood. 

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
<img src="/_graph.png" width="500px">
</p>

## Getting started

If you already have access to Upsun:

- Visit the Upsun Console (https://console.upsun.com/projects/create-project) to create a new project
- Create or select an organization to run the demo on
- Click **Explore Upsun** to start the demo

	</main>
</Layout>

<style>
	main {
		margin: auto;
		padding: 1rem;
		width: 800px;
		max-width: calc(100% - 2rem);
		color: white;
		font-size: 20px;
		line-height: 1.6;
	}
	.astro-a {
		position: absolute;
		top: -32px;
		left: 50%;
		transform: translatex(-50%);
		width: 220px;
		height: auto;
		z-index: -1;
	}
	h1 {
		font-size: 4rem;
		font-weight: 700;
		line-height: 1;
		text-align: center;
		margin-bottom: 1em;
	}
	.text-gradient {
		background-image: var(--accent-gradient);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-size: 400%;
		background-position: 0%;
	}
	.instructions {
		margin-bottom: 2rem;
		border: 1px solid rgba(var(--accent-light), 25%);
		background: linear-gradient(rgba(var(--accent-dark), 66%), rgba(var(--accent-dark), 33%));
		padding: 1.5rem;
		border-radius: 8px;
	}
	.instructions code {
		font-size: 0.8em;
		font-weight: bold;
		background: rgba(var(--accent-light), 12%);
		color: rgb(var(--accent-light));
		border-radius: 4px;
		padding: 0.3em 0.4em;
	}
	.instructions strong {
		color: rgb(var(--accent-light));
	}
	.link-card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(24ch, 1fr));
		gap: 2rem;
		padding: 0;
	}
    a:visited {
        color: rgb(0, 0, 238);
    }
</style>
