---
layout: experiment.njk
id: E001
title: "AI-Powered Job Scheduler"
status: completed
permalink: /lab/e001/
hypothesis: "Can we reduce job queue wait times by using machine learning to predict job duration and optimize scheduling?"
date_start: 2024-03-15
date_end: 2024-04-20
tags:
  - ai
  - scheduling
  - hpc
  - machine-learning
team:
  - name: "Jane Developer"
    github: janedev
  - name: "Alex Researcher"
    github: alexr
links:
  - label: "GitHub Repository"
    url: https://github.com/openflighthpc/ai-scheduler
  - label: "Paper Draft"
    url: https://example.com/paper-draft.pdf
thumbnail: /assets/images/experiments/e001/thumb.png
---

## Initial Idea

Our HPC cluster experiences significant job queue congestion during peak hours. We hypothesized that
machine learning could predict job runtimes more accurately than user estimates, enabling the scheduler
to make better placement decisions.

The core idea was to train a regression model on historical job data (CPU count, memory requests, user,
application type) to predict actual runtime, then feed these predictions to the SLURM scheduler via
a custom plugin.

## Approach

1. **Data Collection**: Extracted 6 months of job history from SLURM accounting
2. **Feature Engineering**: Created features from job attributes and historical user patterns
3. **Model Training**: Tested Random Forest, XGBoost, and neural network approaches
4. **Integration**: Built a SLURM plugin that queries the model for runtime predictions
5. **Testing**: Ran a 2-week A/B test comparing ML-predicted vs user-estimated scheduling

## Outcome

**Key Findings:**

- ML predictions reduced average queue wait time by **23%** during peak hours
- User estimates were off by an average of 340% (jobs ran much shorter than expected)
- The model performed best for recurring jobs from known users
- Novel job types remained difficult to predict accurately

**What Worked:**

- Random Forest model provided the best balance of accuracy and inference speed
- Feature engineering around user history was crucial for accuracy
- The SLURM plugin architecture was cleaner than expected

**What Didn't Work:**

- Initial neural network approach was overkill and hard to interpret
- Prediction accuracy degraded significantly for new users
- Some users "gamed" their estimates after learning about the system

## Usage Example

```bash
# Install the scheduler plugin
git clone https://github.com/openflighthpc/ai-scheduler
cd ai-scheduler
pip install -r requirements.txt

# Train the model on your cluster's job history
python train.py --history jobs_2023.json --output model.pkl

# Start the prediction service
python predict_server.py --model model.pkl --port 8080
```

## Lessons Learned

This experiment proved that ML-based scheduling can meaningfully improve cluster efficiency. The next
iteration should focus on:

1. Better handling of cold-start problems for new users
2. Exploring online learning to adapt to changing workloads
3. Building interpretability features to help users understand predictions

We recommend this approach for clusters with stable, predictable workloads but suggest caution for
environments with highly variable job patterns.