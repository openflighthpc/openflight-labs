---
layout: experiment.njk
id: FENV
title: 'Flight Environment'
status: archived
permalink: /lab/FENV/
hypothesis: 'A collection of tools for HPC environment accessibility and management'
date_start: 2019-08-01
links:
  - label: GitHub Organization
    url: https://github.com/openflighthpc
---

## Overview

The Flight Environment is a comprehensive suite of tools designed to make HPC environments more accessible to end-users and easier to manage for administrators. The tools work independently but become more powerful when used together, each addressing specific areas of HPC environment usage.

The Flight Environment consists of three main components:

- **Flight User Suite** - CLI tools for end-users to streamline common workflow tasks like launching desktop sessions, managing software ecosystems, and handling object storage
- **Flight Web Suite** - A web front-end providing browser-based access to terminals, desktops, and files on HPC systems
- **Flight Admin Tools** - CLI tools for administrators to handle cluster configuration, system inventory, and configuration management

## Flight User Suite

The Flight User Suite provides self-service tools for HPC end-users:

- **Runway** - A self-contained Ruby environment and entrypoint for accessing other Flight tools
- **Starter** - Profile scripts for integrating the user suite into the shell environment
- **Desktop** - Launch VNC-ready virtual desktops with various desktop environments (GNOME, xterm, KDE, etc.)
- **Env** - Access and manage various software managers for HPC applications
- **Silo** - Object-based storage management for files and software
- **Job** - Create job scripts from templates, launch jobs, and monitor activity

## Flight Web Suite

The Flight Web Suite provides web-based access to HPC environments:

- **WWW** - Self-contained web-server for Web Suite applications
- **Login** - User authentication integrated with system auth
- **Console** - Web-based terminal for CLI access
- **Desktop** - Create and manage remote desktop sessions
- **File Manager** - Upload and download files in the user environment
- **Job** - Create and manage job scripts and execution

## Flight Admin Tools

Administrator-focused tools for cluster management:

- **Gather** - Collect and store system information
- **Hunter** - Send system information and manage host inventory over the network
- **Profile** - Apply configuration identities to hosts in an HPC environment
- **PDSH** - OpenFlight's build of PDSH for parallel shell execution

## Outcomes

- Enabled self-service HPC access for end-users
- Streamlined desktop, job, and storage management
- Integrated admin tools for cluster configuration