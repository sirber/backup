.PHONY: dev build_win build_mac build_linux

dev:
	@deno run -A --watch main.ts

build_windows:
	@deno compile --target x86_64-pc-windows-msvc --allow-read --allow-write main.ts

build_mac:
	@deno compile --target aarch64-apple-darwin --allow-read --allow-write main.ts

build_linux:
	@deno compile --target x86_64-unknown-linux-gnu --allow-read --allow-write main.ts

