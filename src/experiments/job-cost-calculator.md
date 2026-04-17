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

The Job Cost Calculator is a proof-of-concept Ruby application that analyses historic Slurm jobs to determine suitable cloud instances for running them and estimates the associated costs. This helps organisations understand the financial implications of migrating HPC workloads to cloud infrastructure.

## How It Works

The tool analyses Slurm job data from `sacct` command output, examining resource requirements such as GPUs, CPUs, memory, and node counts. It then recommends appropriate cloud instances from AWS or Azure based on these requirements and calculates the costs for running jobs on those instances.

It would output per job costs
```
Job 001 used 16 GPUs, 32CPUs & 4181.11MB on 4 node(s) for 167mins. Instance config of 4 p3.8xlarge would cost $159.84.
Job 002 used 0 GPUs, 4CPUs & 8.81MB on 1 node(s) for 12mins. Instance config of 1 c5.xlarge would cost $0.05.
```

As well as a cost for the whole sacct archive
```
Job Totals

Total completed jobs: 578
Average time per job: 27mins
Average mem per job: 623.1MB
Average mem per cpu: 77.3MB
Max mem for 1 job: 4234.07MB
Max mem per cpu: 7044.6MB

Overall best fit cost: $23153.22
Average best fit cost per job: $40.06
35 jobs requiring larger instances than base equivalent
50 jobs requiring more nodes than used on physical cluster
```

## Key Features

- Analyses Slurm job history to extract resource requirements
- Recommends appropriate cloud instances (AWS or Azure) based on job needs
- Supports GPU-optimised, compute-optimised, and memory-optimised instance categories
- Calculates costs for running jobs on recommended instances
- Optional CSV export for reporting
- Options to include failed jobs, ignore node counts, or use customer-facing instance names
- Displays job totals, averages, and instance summaries

## Use Case

This tool helps organisations planning to migrate HPC workloads to the cloud by:

- Understanding their actual resource utilisation patterns
- Getting cost estimates before committing to cloud infrastructure
- Identifying the most cost-effective instance types for their workloads
- Planning budget allocation for cloud computing resources
