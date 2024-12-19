# backup

## Usage

Create a `config.json` file with the folders you want to backup.

## Exemple for Linux / Mac
```json 
[
    {
        "name": "test",
        "sourcePath": "./",
        "destination": "../test.zip"
    }
]
```

## Exemple for Windows
```json 
[
    {
        "name": "Photos",
        "sourcePath": "P:\\Photos\\photos_perso",
        "destination": "E:\\Backups\\Photos\\photos_perso.zip"
    }
]
```



then run the app!

## Compilation

You can use `make` to build the app. You'll need `deno` installed.

- make build_windows
- make build_mac
- make build_linux