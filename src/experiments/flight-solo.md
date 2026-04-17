---
layout: experiment.njk
id: S0L0
title: 'Flight Solo'
status: archived
permalink: /lab/S0L0/
hypothesis: 'HPC-ready, platform-agnostic image approach to deploying HPC resources'
date_start: 2024-08-01
links:
  - label: Documentation
    url: https://github.com/openflighthpc/docs.openflighthpc.org/tree/release/2024.1/docs/docs/flight-solo
---

## Overview

Flight Solo is an HPC-ready, platform-agnostic image designed to rapidly deploy complete HPC environments. It provides a personal High Performance Computing environment for research and scientific computing, compatible with on-demand, reserved, and spot instances.

The image comes loaded with a job scheduler, applications, and remote desktop service. Multiple software application frameworks are available including Spack, EasyBuild, and Conda, providing hundreds of programs, libraries, compilers, and MPIs. Data management tools for POSIX and S3 object storage help users transfer files and manage storage resources.

## Architecture

Flight Solo is built on three key components:

- **HPC-Optimised Rocky 9 OS** - A clean Rocky EL9 image tweaked for HPC workloads with kernel drivers supporting most virtualisation platforms and suitable security settings
- **Cloud-Init Integration** - Injects runtime information and configuration into the OS of cloud systems for flexible setup
- **Flight Environment** - The complete Flight Environment is installed by default with configuration optimisations

## Use Cases

Flight Solo is ideal for:

- Researchers and end-users wanting to get going with HPC quickly
- Rapid deployment of replicable HPC environments
- Proof-of-concept cloud HPC environments
- Evaluating the Flight Environment

## Platform Agnostic

The image build process empowers platform-agnostic distribution. The same image functions identically on OpenStack, AWS, and Azure. It was also available through the AWS Marketplace for easy deployment.

## Outcomes

- Provided HPC-ready cloud images
- Enabled rapid deployment of HPC environments
