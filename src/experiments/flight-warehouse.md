---
layout: experiment.njk
id: WHSE
title: 'Flight Warehouse'
status: archived
permalink: /lab/WHSE/
hypothesis: 'A selection of templates and guides for quickstart HPC environments'
date_start: 2023-11-03
links:
  - label: Source Archive
    url: https://github.com/openflighthpc/flight-warehouse-archive
---

## Overview

Flight Warehouse provided private cloud templates and documentation to quickly create HPC environments. It gave admin users a way of creating environments to test and demo HPC functionality, while non-admin users could spin up their own environments within the private cloud space for personal use.

This experiment sought to expose key considerations with HPC environments: workload lifetime requirements, infrastructure costs, and collaboration requirements.

## Architecture

Flight Warehouse was built around Flight Solo, the packaged cloud image containing Flight Tools and helpers to jumpstart HPC environment creation. It provided templates and workflows for deploying complete HPC stacks in private cloud environments.

## Outcomes

- Provided cloud templates for HPC environments
- Exposed key HPC environment considerations