---
title: "This is Bruce"
#permalink: /:title/
layout: page
---

<img src="/assets/images/Profile.gif" alt="Alt text" style="float: left; margin-right: 30px; margin-top: 10px; margin-bottom: 20px;" width="40%" height="40%" />
I am a Ph.D. candidate at
the [Autonomous Learning Robots](https://alr.iar.kit.edu/) (ALR) Lab of
the [Karlsruhe Institute of Technology](https://www.kit.edu/english/) (KIT),
under the supervision of [Prof. Gerhard Neumann](https://scholar.google.de/citations?user=GL360kMAAAAJ&hl=en)
and [T.T. Prof. Rudolf Lioutikov](https://rudolf.intuitive-robots.net/).
<br>

My research focuses on advancing the learning and representation of robotic movement trajectories, 
with a particular emphasis on their applications in imitation and reinforcement learning.
I aim to improve **model capacity, learning efficiency**, and **interpretability** by leveraging
state-of-the-art algorithms and tools.

In addition to my research, I serve as a teaching assistant at KIT, contributing to courses 
Cognitive Systems (SS20, SS21), Machine Learning (WS21/22, SS23, SS24),
and partially in Deep Reinforcement Learning (WS21/22). I also mentor and supervise 
several Bachelor's and Master's research projects, seminars, and theses.

I was born and raised in Beijing, China and obtained my Bachelor's degree in
Mechanical Engineering at
the [University of Science and Technology of China](https://en.wikipedia.org/wiki/University_of_Science_and_Technology_of_China).
Later, I moved to Germany to pursue my Master's degree in Computer-Aided Mechanical Engineering at
the [RWTH Aachen University](https://en.wikipedia.org/wiki/RWTH_Aachen_University).
During my studies, I gained practical experience as a software engineering intern at [Kärcher](https://www.kaercher.com/int/professional/cleaning-robots.html) in Stuttgart, 
focusing on autonomous robotic cleaners.
For my Master's thesis, I joined the [Max Planck Institute for Intelligent Systems](https://is.mpg.de/)
(MPIIS), where I collaborated with my thesis supervisor [Prof. Jan Peters](https://www.ias.informatik.tu-darmstadt.de/Team/JanPeters)
and my current Ph.D. advisor [Prof. Gerhard Neumann](https://scholar.google.de/citations?user=GL360kMAAAAJ&hl=en).


---

# News

[//]: # (Jan. 2025, my PhD work got accepted by ICLR 2025, I am going to present it in Singapore.)

Sept. 2024, one co-authored paper got accepted by NeurIPS 2024, I am going to present it in Vancouver, Canada.

Aug. 2024, one co-authored paper got accepted by CoRL 2024.

Jan. 2024, my PhD work got accepted at ICLR 2024, I presented it in Vienna, Austria.

---

# Publications

[//]: # (TOP-ERL)
<div style="display: flex; align-items: flex-start;">
  <div style="flex: 1; padding-right: 20px; justify-content: space-between; padding-top: 10px; align-items: flex-start;">
    <a href="/assets/images/TOP_ERL_critic.png" target="_blank" rel="noopener noreferrer">
    <img src="/assets/images/TOP_ERL_critic.png" alt="TCE" />
    </a>
    <a href="/assets/images/TOP_ERL_results.png" target="_blank" rel="noopener noreferrer">
    <img src="/assets/images/TOP_ERL_results.png" alt="TCE" />
    </a> 
  </div>
  <div style="flex: 2;">
    <p>
        TOP-ERL: Transformer-based Off-Policy Episodic Reinforcement Learning (Under Review)
    </p>
    <p>
        <strong>Ge Li</strong>, Dong Tian, Hongyi Zhou, Xinkai Jiang, Rudolf Lioutikov, Gerhard Neumann.
    </p>
    <p>
        See:
        <a href="https://arxiv.org/pdf/2410.09536" target="_blank" rel="noopener noreferrer">arxiv</a>
    </p>
    <p>
        We propose a novel online off-policy RL methodology that utilizes a transformer-based critic to learn values of action sequences.
    </p>
  </div>
</div>

<br><br>

[//]: # (VDD)
<div style="display: flex; align-items: flex-start;">
  <div style="flex: 1; padding-right: 20px; justify-content: space-between; padding-top: 10px; align-items: flex-start;">
    <a href="/assets/images/VDD_overview.png" target="_blank" rel="noopener noreferrer">
    <img src="/assets/images/VDD_overview.png" alt="TCE" />
    </a>
    <a href="/assets/images/vdd_toy_task_animation.gif" target="_blank" rel="noopener noreferrer">
    <img src="/assets/images/vdd_toy_task_animation.gif" alt="VDD_toy" style="width: 52%; max-width: 300px;"/>
    </a>
    <a href="/assets/images/vdd_sort_6.gif" target="_blank" rel="noopener noreferrer">
    <img src="/assets/images/vdd_sort_6.gif" alt="VDD_toy" style="width: 46%; max-width: 300px;"/>
    </a>
  </div>
  <div style="flex: 2;">
    <p>
        Variational Distillation of Diffusion Policies into Mixture of Experts
    </p>
    <p>
        Hongyi Zhou, Denis Blessing, <strong>Ge Li</strong>, Onur Celik, Gerhard Neumann, Rudolf Lioutikov, <strong>NeurIPS, 2024</strong>.
    </p>
    <p>
        See:
        <a href="https://arxiv.org/pdf/2406.12538" target="_blank" rel="noopener noreferrer">arxiv</a> | 
        <a href="https://neurips.cc/virtual/2024/poster/93992" target="_blank" rel="noopener noreferrer">NeurIPS</a> | 
        <a href="https://intuitive-robots.github.io/vdd-website/" target="_blank" rel="noopener noreferrer">GitHub</a>   
    </p>
    <p>
        We introduce Variational Diffusion Distillation (VDD), a novel method for distilling denoising diffusion policies into a Mixture of Experts (MoE).
    </p>
  </div>
</div>

<br><br>


[//]: # (Mamba)
<div style="display: flex; align-items: flex-start;">
  <div style="flex: 1; padding-right: 20px; justify-content: space-between; padding-top: 10px; align-items: flex-start;">
    <a href="/assets/images/Mamba_architecture.png" target="_blank" rel="noopener noreferrer">
    <img src="/assets/images/Mamba_architecture.png" alt="TCE" />
    </a>
    <a href="/assets/images/Mamba_architecture2.png.png" target="_blank" rel="noopener noreferrer">
    <img src="/assets/images/Mamba_architecture2.png" alt="TCE" />
    </a>
    <a href="/assets/images/Mamba_cups.gif" target="_blank" rel="noopener noreferrer">
    <img src="/assets/images/Mamba_cups.gif" alt="VDD_toy" style="width: 47.5%; max-width: 300px;"/>
    </a>
    <a href="/assets/images/Mamba_insert.gif" target="_blank" rel="noopener noreferrer">
    <img src="/assets/images/Mamba_insert.gif" alt="VDD_toy" style="width: 48.5%; max-width: 300px;"/>
    </a>
  </div>
  <div style="flex: 2;">
    <p>
        MaIL: Improving Imitation Learning with Selective State Space Models
    </p>
    <p>
        Xiaogang Jia, Qian Wang, Atalay Donat, Bowen Xing, <strong>Ge Li</strong>, Hongyi Zhou, Onur Celik, Denis Blessing, Rudolf Lioutikov, Gerhard Neumann, <strong>CoRL, 2024</strong>.
    </p>
    <p>
        See:
        <a href="https://arxiv.org/pdf/2406.08234" target="_blank" rel="noopener noreferrer">arxiv</a> | 
        <a href="https://openreview.net/forum?id=IssXUYvVTg" target="_blank" rel="noopener noreferrer">OpenReview</a> | 
        <a href="https://xiaogangjia.github.io/mail_website/" target="_blank" rel="noopener noreferrer">GitHub</a>   
    </p>
    <p>
        We introduce Mamba Imitation Learning (MaIL), a novel imitation learning architecture that offers a computationally efficient alternative to state-of-the-art Transformer policies.
    </p>
  </div>
</div>

<br><br>

[//]: # (TCE)
<div style="display: flex; align-items: flex-start;">
  <div style="flex: 1; padding-right: 20px; padding-top: 10px;">
    <a href="/assets/images/TCE_abstract.png" target="_blank" rel="noopener noreferrer">
    <img src="/assets/images/TCE_abstract.png" alt="TCE" />
    </a>
    <a href="/assets/images/TCE_cov.png" target="_blank" rel="noopener noreferrer">
    <img src="/assets/images/TCE_cov.png" alt="TCE" />
    </a>
  </div>
  <div style="flex: 2;">
    <p>
        Open the Black Box: Step-based Policy Updates for Temporally-Correlated Episodic Reinforcement Learning.
    </p>
    <p>
        <strong>Ge Li</strong>, Hongyi Zhou, Dominik Roth, Serge Thilges, 
        Fabian Otto, Rudolf Lioutikov, Gerhard Neumann, <strong>ICLR, 2024</strong>.
    </p>
    <p>
        See:
        <a href="https://arxiv.org/abs/2401.11437" target="_blank" rel="noopener noreferrer">arxiv</a> | 
        <a href="https://openreview.net/forum?id=mnipav175N" target="_blank" rel="noopener noreferrer">OpenReview</a> | 
        <a href="https://github.com/BruceGeLi/TCE_RL" target="_blank" rel="noopener noreferrer">GitHub</a>   
    </p>
    <p>
        We propose a novel RL framework that integrates step-based information into the
        policy updates of Episodic RL, while preserving the broad exploration scope,
        movement correlation modeling and trajectory smoothness.
    </p>
  </div>
</div>

<br><br>

[//]: # (MP3)
<div style="display: flex; align-items: flex-start;">
  <div style="flex: 1; padding-right: 20px; padding-top: 10px;">
    <a href="/assets/images/mp3_robots.gif" target="_blank" rel="noopener noreferrer">
    <img src="/assets/images/mp3_robots.gif" alt="MP3" />
    </a>
  </div>
  <div style="flex: 2;">
    <p>
        MP3: Movement Primitive-Based (Re-) Planning Policies
    </p>
    <p>
        Hongyi Zhou, Fabian Otto, Onur Celik, <strong>Ge Li</strong>, Rudolf Lioutikov, Gerhard Neumann, 
        in Conference on Robot Learning Workshop on Learning Effective Abstractions for Planning, 2023
    </p>
    <p>
        See:
        <a href="https://arxiv.org/pdf/2306.12729.pdf" target="_blank" rel="noopener noreferrer">arxiv</a> | 
        <a href="https://intuitive-robots.github.io/mp3_website/" target="_blank" rel="noopener noreferrer">Website</a> |
        <a href="https://drive.google.com/file/d/1ifTGzw1Eocg8YKo4wRiBPtSBUx0dvfzS/view?usp=sharing" target="_blank" rel="noopener noreferrer">Poster</a>
    </p>
    <p>
        We enable a new Episodic RL framework that allows trajectory replanning in deep
        RL, which allows the agent to react with changing goal and dynamic perturbation.
    </p>
  </div>
</div>


<br><br>


[//]: # (ProDMP)
<div style="display: flex; align-items: flex-start;">
  <div style="flex: 1; padding-right: 20px; padding-top: 10px;">
    <a href="/assets/images/robot_pick.gif" target="_blank" rel="noopener noreferrer">
    <img src="/assets/images/robot_pick.gif" alt="ProDMP" />
    </a>
    <a href="/assets/images/prodmp_structure.png" target="_blank" rel="noopener noreferrer">
    <img src="/assets/images/prodmp_structure.png" alt="ProDMP" />
    </a>
  </div>
  <div style="flex: 2;">
    <p>
        ProDMPs: A Unified Perspective on Dynamic and Probabilistic Movement Primitives.
    </p>
    <p>
        <strong>Ge Li</strong>, Zeqi Jin, Michael Volpp, Fabian Otto, Rudolf Lioutikov and Gerhard Neumann, in IEEE Robotics and Automation Letters (RAL), 2023.
    </p>
    <p>
        See:
        <a href="https://ieeexplore.ieee.org/document/10050558" target="_blank" rel="noopener noreferrer">Paper</a> | 
        <a href="https://drive.google.com/file/d/1s3kOqdEiMePO4eefcoBV6mDssjtks8L1/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Poster</a> | 
        <a href="https://github.com/ALRhub/ProDMP_RAL" target="_blank" rel="noopener noreferrer">GitHub</a> |  
        <a href="https://www.youtube.com/watch?v=PAM0NusL2Do&feature=youtu.be" target="_blank" rel="noopener noreferrer">YouTube</a> 
    </p>
    <p>
        We unified the Dynamic Movement Primitives and the Probabilistic Movement
        Primitives into one model, and achieved smooth trajectory generation,
        goal-attractor convergence, correlation analysis, non-linear conditioning, and online
        re-planing in one framework.
    </p>
  </div>
</div>

<br><br>

[//]: # (SVSL)
<div style="display: flex; align-items: flex-start;">
  <div style="flex: 1; padding-right: 20px; padding-top: 10px;">
    <a href="/assets/images/svsl.png" target="_blank" rel="noopener noreferrer">
    <img src="/assets/images/svsl.png" alt="SVSL"/> 
    </a>
    <a href="/assets/images/svsl_obj.png" target="_blank" rel="noopener noreferrer">
    <img src="/assets/images/svsl_obj.png" alt="SVSL"/> 
    </a>
  </div>
  <div style="flex: 2;">
    <p>
        Specializing Versatile Skill Libraries using Local Mixture of Experts
    </p>
    <p>
        Onur Celik, Dongzhuoran Zhou, <strong>Ge Li</strong>, Philipp Becker, Gerhard Neumann, 
        in Conference on Robot Learning, 2021. 
    </p>
    <p>
        See:
        <a href="https://proceedings.mlr.press/v164/celik22a/celik22a.pdf" target="_blank" rel="noopener noreferrer">Paper</a> | 
        <a href="https://openreview.net/forum?id=j3Rguo81Yi_" target="_blank" rel="noopener noreferrer">OpenReview</a> |  
        <a href="https://www.youtube.com/watch?v=KQ0ZA-vPCKk&t=478s" target="_blank" rel="noopener noreferrer">YouTube</a> 
    </p>
    <p>
        We developed a mixture of experts RL framework to learn versatile skills
        given the same task, such as forehand and backhand strikes in playing table tennis. Our
        method is able to assign policy experts to their corresponding context domains
        and automatically add or delete these experts when necessary.
    </p>
  </div>
</div>
