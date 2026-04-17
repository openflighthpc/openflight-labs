---
layout: experiment.njk
id: CTR1L
title: 'Flight Control'
status: archived
permalink: /lab/CTR1L/
hypothesis: 'Predicting and capping cloud costs around a traditional-like HPC system build in the cloud with power management features to reduce costs'
date_start: 2019-01-01
links:
  - label: Source Code
    url: https://github.com/openflighthpc/flight-control
---

## Overview

Flight Control is a Ruby on Rails application for tracking costs and managing instances on AWS and Azure. It provides visibility into cloud computing costs across projects, enables instance lifecycle management, and helps enforce budget limits through automated recommendations and actions.

![A preview video of Flight Control with added carbon accounting](/assets/videos/experiments/CTR1L/flight-control-preview.mp4)

## Key Features

### Cost Tracking
- Record and view costs for projects hosted on AWS and Azure
- Dashboard visibility into resource utilisation
- Historical cost logging and reporting

### Instance Management
- Turn instances on/off via change requests
- Group-based power operations for managing multiple instances
- Instance state logging and tracking

### Budget Management
- Budget policies with automated switch-off recommendations
- Idle node detection with auto-shutdown capabilities
- CPU monitoring to identify underutilised resources

### Integration
- Slack notifications for alerts and reports
- Flight SSO integration for authentication
- Role-based user permissions
- Scheduled tasks via cron (daily reports, instance logs, cost logs)
- Background job processing with Resque
- Comprehensive audit logging

## Use Cases

Flight Control helps organisations:

- Monitor cloud computing costs across multiple projects and platforms
- Manage compute instance lifecycles to reduce waste
- Enforce budget limits through automated recommendations
- Provide visibility into resource utilisation through dashboards
- Coordinate team access with role-based permissions

This tool addresses the challenge of running cost-effective cloud HPC by providing the management and monitoring capabilities needed to keep costs predictable and controlled.
