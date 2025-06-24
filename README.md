# StickyDo

A simple, always-on-top desktop to-do list that f\*cks your distractions into submission.

> No cloud. No sign-up. No tabs. No bloat. Just a sticky f\*cking window that stays in your face until you actually get sh\*t done.

![image](https://github.com/user-attachments/assets/9e170cc5-28e4-4602-b172-0def562e7d9e)

## 🚀 Features

- 🧲 **Always-on-top mode** — Your tasks will haunt you until you finish them.
- 💻 **Undecorated custom window** — Minimalist cyan title bar with drag support.
- ✅ **To-do input with checkbox support** — Add tasks, check them off, or ignore them and cry.
- 🔄 **Clear all tasks button** — Rage-quit your list with one click.
- 🧠 **Keyboard-friendly** — Hit `Enter` to add tasks instantly.
- 🌈 **Dark mode UI** — Because we’re not animals.
- 🖌️ **Cyan-accented theme** — Looks slick. That’s it.
- 👻 **Dashed separator for each task** — You’ll like it. Trust us.

## 🔧 Compile

Dependencies:
```sh
sudo dpkg --add-architecture i386
sudo apt update
sudo apt install wine32:i386 libwine:i386 libncurses6:i386 libstdc++6:i386 -y
sudo apt install wine64 nsis mono-complete -y
```

```sh
npm install
```

Linux:
```sh
npm run dist -- --linux AppImage
```

Windows:
```sh
npm run dist -- --win --x64
```