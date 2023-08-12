/*
 * SPDX-License-Identifier: GPL-3.0
 * Vinstaller, a cross platform gui/cli app for installing Vencord
 * Copyright (c) 2023 Vendicated, Justice Almanzar, and Vencord contributors
 */

import "./start";

import { spawnNodeModuleBin } from "./utils/spawn.mjs";
spawnNodeModuleBin("tsx", ["scripts/build/build.mts", "--", "--watch", "--dev"]);
spawnNodeModuleBin("vite", ["dev", "--port", "5173"]);
