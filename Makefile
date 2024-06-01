.PHONY: dev build_win build_mac build_linux

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

dev: ## Start development enviornment
	@deno run -A --watch main.ts

build_windows: ## Build for windows
	@deno compile --target x86_64-pc-windows-msvc --allow-read --allow-write main.ts

build_mac: ## Build for mac
	@deno compile --target aarch64-apple-darwin --allow-read --allow-write main.ts

build_linux: ## Build for linux
	@deno compile --target x86_64-unknown-linux-gnu --allow-read --allow-write main.ts

