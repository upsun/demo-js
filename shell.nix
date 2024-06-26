let
  nixpkgs = fetchTarball "https://github.com/NixOS/nixpkgs/tarball/nixos-24.05";
  pkgs = import nixpkgs { config = {}; overlays = []; };
in

pkgs.mkShellNoCC {
  packages = with pkgs; [
    upsun
    jq
    bun
    nodejs_22
    deno
    nodePackages.npm
  ];
  DENO_DIR="./cache";
  shellHook = ''
    ./utils/local.sh
    . ./utils/local_var.sh
    npm run start
  '';
}
