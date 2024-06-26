let
  nixpkgs = fetchTarball "https://github.com/NixOS/nixpkgs/tarball/nixos-24.05";
  pkgs = import nixpkgs { config = {}; overlays = []; };
in

pkgs.mkShellNoCC {
  packages = with pkgs; [
    bun
    nodejs_22
    deno
    nodePackages.npm
  ];
  DENO_DIR="./cache";
  shellHook = ''
    ROOT=$(pwd)
    npm install --workspace=main --workspace=nodejs
    cd $ROOT/apps/bun && bun install
    cd $ROOT/apps/deno && deno cache package.json && deno compile --allow-env --allow-net --allow-read main.ts
    cd $ROOT && npm run build
  '';
}
