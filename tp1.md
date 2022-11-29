# TP 1 - Identifier l'infrastructure

Chez OneStock, nous avons de nombreux développeurs qui travaillent à l'implémentation de nouvelles fonctionnalitées sur les différentes applications (backoffice et vendor interface), d'autres qui travaillent à l'intégration des clients à notre technologie.

Il existe également une équipe spéciale, appelée *Force Rouge* qui travaille exclusivement sur des problématiques DevOps. Leur rôle chez OneStock est de maintenir l'infrastructure de production mais également celles de qualif et de test. Certains des membres de l'équipe s'occupent également du parc informatique (mises à jours, logiciels, etc.) du réseau et de l'active directory.

Pour réaliser nos développements, nous utilisons des Skaffold privés contenant une instance complète de la solution OneStock.

**Schéma de l'infrastructure OneStock:**

```mermaid
graph TD;
    API-->Micro_services;
    Micro_services-->Boîte_rouge;
    Micro_services-->Boîte_verte;
    Micro_services-->RabbitMQ;
    Boîte_rouge-->RabbitMQ;
    Boîte_verte-->RabbitMQ;
    RabbitMQ-->Micro_services;
    RabbitMQ-->Boîte_rouge;
    RabbitMQ-->Boîte_verte;
```

**Processus de développement:**

```mermaid
gitGraph
    commit
    commit
    branch qualif
    commit
    commit
    branch tests
    commit
    commit
    branch dev
    commit
    branch v10_5
    commit
    commit
    branch feature/new_footer
    commit
    commit
    checkout v10_5
    branch feature/new_login_form
    commit
    commit
    commit
    commit tag:"pull request"
    merge feature/new_login_form
    checkout feature/new_footer
    commit
    commit tag:"pull request"
    merge feature/new_footer
    merge v10_5
    merge tests
    commit "hotfix/new_form_event_error"
    merge qualif
    merge main
