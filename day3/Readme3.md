📁 Day 3 – Core modules: fs, path, os
This module focuses on interacting with the operating system and the file system using Node.js's powerful built-in Core Modules. These modules are always available and do not require npm installation.

Key Concepts
1. The fs Module (File System)
The primary interface for reading, writing, and managing files and directories.

Best Practice: Always prefer the Promise-based API (import { readFile } from 'node:fs/promises';) for cleaner code that works well with async/await.

Function

Purpose

readFile()

Reads the entire content of a file.

writeFile()

Writes data to a file (creates or overwrites).

stat()

Retrieves file information (size, permissions).

2. The path Module
Provides utilities for working with file and directory paths in a consistent, cross-platform way, resolving differences between Windows (\) and Unix-like systems (/).

Critical Function: path.join() is the safest way to build paths from segments, ensuring reliability across all operating systems.

Function

Purpose

path.join()

Joins path segments and normalizes the result.

path.resolve()

Resolves a sequence of paths to an absolute path.

path.basename()

Gets the file name portion of a path.

path.extname()

Gets the file extension.

3. The os Module (Operating System)
Offers operating-system-specific utility methods and properties, useful for monitoring, logging, and environment checks.

Function

Purpose

os.platform()

Returns the operating system platform ('win32', 'linux', etc.).

os.homedir()

Returns the home directory of the current user.

os.totalmem()

Returns the total amount of system memory in bytes.

os.cpus()

Returns information about the machine's CPU cores.

Runnable Examples
Refer to the following files to see these modules in action:

fs-example.mjs: Demonstrates asynchronous file reading. (Requires a data.txt file).

path-example.mjs: Shows how to use path.join() and path manipulation functions.

os-example.mjs: Logs details about the host machine's system, memory, and CPU.