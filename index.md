---
title: "This is Bruce"
#permalink: /:title/
layout: page
---

<img src="/assets/images/bruce.jpg" alt="Alt text" style="float: left; margin-right: 30px; margin-top: 10px; margin-bottom: 20px;" width="40%" height="40%" />

I am a Ph.D. candidate at
the [Autonomous Learning Robots](https://alr.iar.kit.edu/) (ALR) Lab of
the [Karlsruhe Institute of Technology](https://www.kit.edu/english/) (KIT),
under
the supervision
of [Prof. Gerhard Neumann](https://scholar.google.de/citations?user=GL360kMAAAAJ&hl=en).
In addition, I collaborate closely
with [T.T. Prof. Rudolf Lioutikov](https://rudolf.intuitive-robots.net/).
<br>

My research primarily concentrates on advancing the learning and representation
of robotic movement trajectories, with a particular emphasis on their
application in tasks involving robot imitation and reinforcement learning. I
hold the conviction that robots possess the potential to learn and emulate human
behavior, enabling them to observe their surroundings and execute movements in
an intuitive fashion. This intuition encompasses movements that are both smooth
and consistent. In pursuit of these objectives, I am committed to enhancing the
**capacity of models**, their **learning efficiency**, and their ability to
provide
**explanations**, all through the adoption of state-of-the-art algorithms and
tools.
Along with my research, I also serve as a teaching assistant at KIT, including
Cognitive Systems (SS20, SS21), Machine Learning (WS21/22, SS23), and partially
in Deep Reinforcement Learning (WS21/22).
I also lead and supervise several Bachelor's and Master's research projects,
seminars and theses.

[//]: # (<br>)

I was born and raised in Beijing, China and obtained my Bachelor's degree in
Mechanical Engineering at
the [University of Science and Technology of China](https://en.wikipedia.org/wiki/University_of_Science_and_Technology_of_China).
Subsequently, I moved to Germany and obtained my Master's degree in
Computer-Aided
Mechanical Engineering at
the [RWTH Aachen University](https://en.wikipedia.org/wiki/RWTH_Aachen_University).
During this period, my interests shifted towards Robotics and Computer Science.
leading me to
the [Max Planck Institute for Intelligent Systems](https://is.mpg.de/)
(MPIIS) for my Master's thesis, where I met my thesis
supervisor [Prof. Jan Peters](https://www.ias.informatik.tu-darmstadt.de/Team/JanPeters)
and my current Ph.D.
advisor [Prof. Gerhard Neumann](https://scholar.google.de/citations?user=GL360kMAAAAJ&hl=en).


---

# News

Jan 2024, one paper got accepted at ICLR 2024, I am going to present it in
Vienna, Austria.

Oct 2023, I presented my RAL paper at IROS 2023 in Detroit, US.

Aug 2023, I joined
the [IWIAS](https://www.ias.informatik.tu-darmstadt.de/Workshop/IWIALS) in
Kleinwalsertal, Austria.
and met 100+ European researchers in robot learning.

Jan 2023, one paper got accepted by IEEE RAL.


---

# Publications

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
        Fabian Otto, Rudolf Lioutikov, Gerhard Neumann, in International Conference on Learning Representations (ICLR), 2024.
    </p>
    <p>
        See:
        <a href="https://arxiv.org/abs/2401.11437" target="_blank" rel="noopener noreferrer">arxiv</a> | 
        <a href="https://openreview.net/forum?id=mnipav175N" target="_blank" rel="noopener noreferrer">OpenReview</a> | 
        <a href="https://github.com/BruceGeLi/TCE_RL" target="_blank" rel="noopener noreferrer">GitHub</a> |  
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
    <a href="/assets/images/mp3.png" target="_blank" rel="noopener noreferrer">
    <img src="/assets/images/mp3.png" alt="MP3" />
    </a>
    <a href="/assets/images/mp3_envs.png" target="_blank" rel="noopener noreferrer">
    <img src="/assets/images/mp3_envs.png" alt="MP3" />
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
        <a href="https://intuitive-robots.github.io/mp3_website/" target="_blank" rel="noopener noreferrer">Website</a>
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
    <a href="/assets/images/prodmp.png" target="_blank" rel="noopener noreferrer">
    <img src="/assets/images/prodmp.png" alt="ProDMP" />
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