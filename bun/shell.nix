let
  nixpkgs = fetchTarball "https://github.com/NixOS/nixpkgs/tarball/nixos-24.05";
  pkgs = import nixpkgs { config = {}; overlays = []; };
in

pkgs.mkShell {
  packages = with pkgs; [
    bun
    yq
  ];
  UPSUN_APP = "bun_app";
  UPSUN_CONFIG="../.upsun/config.yaml";
  shellHook = ''
    BUILD_HOOK=$(cat $UPSUN_CONFIG | yq -r '.applications.[$ENV.UPSUN_APP].hooks.build' )
    eval "$BUILD_HOOK"

    START_COMMAND=$(cat $UPSUN_CONFIG | yq -r '.applications.[$ENV.UPSUN_APP].web.commands.start' )
    eval "$START_COMMAND"
  '';
}
