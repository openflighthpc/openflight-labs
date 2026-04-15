---
layout: experiment.njk
id: E002
title: "Container Runtime Performance Comparison"
status: completed
permalink: /lab/e002/
hypothesis: "Which container runtime (Singularity, Podman, Docker) provides the best HPC workload performance?"
date_start: 2024-01-10
date_end: 2024-02-28
tags:
  - containers
  - hpc
  - performance
  - benchmarking
team:
  - name: "Chris Engineer"
    github: chrise
  - name: "Sam Admin"
    github: samadmin
links:
  - label: "Benchmark Results"
    url: https://github.com/openflighthpc/container-benchmarks
  - label: "Full Report"
    url: https://docs.openflighthpc.org/container-benchmarks
thumbnail: /assets/images/experiments/e002/thumb.png
---

## Initial Idea

With the growing adoption of containers in HPC environments, we wanted to establish clear performance
benchmarks across the three main container runtimes used in our community: Singularity (Apptainer),
Podman, and Docker. Our hypothesis was that Singularity would show the best HPC performance due to
its design specifically for HPC workloads.

## Approach

We designed a comprehensive benchmark suite covering:

1. **Compute Performance**: MPI benchmarks, OpenMP parallel scaling
2. **I/O Performance**: Parallel filesystem reads, checkpoint writes
3. **Startup Latency**: Container initialization time, image pull performance
4. **Resource Overhead**: Memory footprint, CPU overhead during execution

Each runtime was tested under identical conditions on our test cluster:
- 16 nodes, 64 cores per node
- 100Gbps InfiniBand interconnect
- Lustre parallel filesystem
- Identical container images (converted from Docker to each format)

## Outcome

**Performance Summary (relative to bare metal baseline):**

| Runtime      | MPI Performance | I/O Throughput | Startup Time | Memory Overhead |
|--------------|-----------------|----------------|--------------|-----------------|
| Singularity  | 99.2%           | 98.8%         | 1.2s         | +2%             |
| Podman       | 98.8%           | 97.5%         | 2.8s         | +5%             |
| Docker       | 98.1%           | 96.2%         | 3.1s         | +8%             |

**Key Findings:**

- All runtimes achieved near-native performance for compute-bound workloads
- Singularity had the lowest overhead and fastest startup
- Docker showed slightly higher overhead due to additional abstraction layers
- I/O performance was most affected by container runtime choice

## Recommendations

For OpenFlightHPC environments, we recommend:

- **Singularity/Apptainer** for traditional HPC workloads requiring MPI
- **Podman** for environments needing rootless containers with good security
- **Docker** primarily for development environments or when compatibility is prioritized over performance

## Usage Example

```bash
# Run the benchmark suite yourself
git clone https://github.com/openflighthpc/container-benchmarks
cd container-benchmarks

# Benchmark a specific runtime
./benchmark.sh --runtime singularity --test all

# Compare results
./compare_results.py results_singularity.json results_podman.json
```

## Files

- `benchmarks/` — Individual test scripts
- `results/` — Raw benchmark data
- `analysis/` — Jupyter notebooks with analysis