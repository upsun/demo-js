let
  nixpkgs = fetchTarball "https://github.com/NixOS/nixpkgs/tarball/nixos-24.05";
  pkgs = import nixpkgs { config = {}; overlays = []; };
in

pkgs.mkShellNoCC {
  packages = with pkgs; [
    nodejs_20
    nodePackages.npm
  ];
  
  shellHook = ''
    npm install
    npm run setup-env
    npm run build
  '';
}
