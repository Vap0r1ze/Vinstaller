/*
 * SPDX-License-Identifier: GPL-3.0
 * Vinstaller, a cross platform gui/cli app for installing Vencord
 * Copyright (c) 2023 Vendicated, Justice Almanzar, and Vencord contributors
 */

import { BrowserWindow } from "electron";
import { join } from "path";

import { ICON_PATH, RENDERER_DIR } from "../shared/paths";
import { makeLinksOpenExternally } from "./utils/makeLinksOpenExternally";

export let mainWin: BrowserWindow;

export function createMainWindow() {
    const win = (mainWin = new BrowserWindow({
        title: "Vencord Installer",
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            devTools: true
        },
        icon: ICON_PATH,
        autoHideMenuBar: true
    }));

    makeLinksOpenExternally(win);

    if (IS_DEV) {
        win.loadURL("http://localhost:5173");
    } else {
        win.loadFile(join(RENDERER_DIR, "index.html"));
    }

    return win;
}
