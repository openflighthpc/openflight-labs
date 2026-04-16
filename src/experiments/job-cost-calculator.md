---
layout: experiment.njk
id: C0ST
title: 'Job Cost Calculator'
status: archived
permalink: /lab/C0ST/
hypothesis: 'Translating known data about SLURM job resource utilisation onto cloud resources to estimate cost of execution'
date_start: 2020-11-03
links:
  - label: Source Code
    url: https://github.com/openflighthpc/cloud-job-cost-estimator
---

## Overview

The Job Cost Calculator is a proof-of-concept Ruby application that analyzes historic Slurm jobs to determine suitable cloud instances for running them and estimates the associated costs. This helps organizations understand the financial implications of migrating HPC workloads to cloud infrastructure.

## How It Works

The tool analyzes Slurm job data from `sacct` command output, examining resource requirements such as GPUs, CPUs, memory, and node counts. It then recommends appropriate cloud instances from AWS or Azure based on these requirements and calculates the costs for running jobs on those instances.

## Key Features

- Analyzes Slurm job history to extract resource requirements
- Recommends appropriate cloud instances (AWS or Azure) based on job needs
- Supports GPU-optimized, compute-optimized, and memory-optimized instance categories
- Calculates costs for running jobs on recommended instances
- Optional CSV export for reporting
- Options to include failed jobs, ignore node counts, or use customer-facing instance names
- Displays job totals, averages, and instance summaries

## Use Case

This tool helps organizations planning to migrate HPC workloads to the cloud by:

- Understanding their actual resource utilization patterns
- Getting cost estimates before committing to cloud infrastructure
- Identifying the most cost-effective instance types for their workloads
- Planning budget allocation for cloud computing resources