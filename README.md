# Le cabinet dentaire Tri-Dent

## 📌 Présentation du projet

**Cabinet dentaire Tri-Dent** est un site vitrine développé pour un cabinet dentaire situé en France, dans le cadre de la rénovation complète de leurs locaux.

Le site met en valeur le nouveau cabinet, présente l'équipe de praticiens et d'assistantes, détaille les technologies utilisées et communique sur les valeurs du cabinet pour rassurer les patients. Il intègre également une importante section blog dédiée aux informations médicales : conseils dentaires, explications des pathologies et présentation des pratiques.

**Son objectif principal** : offrir une vitrine professionnelle moderne pour accompagner la réouverture du cabinet rénové, tout en fournissant un outil pratique pour informer et orienter les patients.

---

## 🎯 Objectifs du projet

- **Présenter le cabinet rénové** avec une identité visuelle forte et moderne
- **Valoriser l'équipe et les technologies** pour instaurer la confiance auprès des patients
- **Fournir des informations médicales accessibles** via un blog structuré (conseils, pathologies, pratiques)
- **Optimiser le référencement local (SEO)** pour améliorer la visibilité du cabinet dans un secteur hautement concurrentiel
- **Faciliter la prise de contact** avec un formulaire et une prise de rendez-vous par praticien
- **Guider les patients en cas d'urgence** avec des pages dynamiques adaptées (jours ouvrés, week-ends, jours fériés)

---

## 🚀 Fonctionnalités principales

- **CMS headless Sanity** pour la gestion autonome du blog médical (conseils, articles sur les pathologies, pratiques dentaires)
- **Carrousel de présentation** sur la page d'accueil (technologie personnalisée et complexe à implémenter)
- **Pages détaillées** : présentation du cabinet, de l'équipe (dentistes et assistantes), des technologies utilisées, et des valeurs
- **Blog médical structuré** : articles catégorisés pour faciliter l'accès aux informations pertinentes
- **Formulaire de contact** avec envoi d'emails
- **Prise de rendez-vous** intégrée, avec sélection par praticien
- **Gestion dynamique des urgences** : affichage conditionnel des informations selon le jour (semaine, week-end, jour férié)
- **Design responsive** optimisé pour mobile, tablette et desktop
- **Optimisation SEO avancée** :
  - Balises meta dynamiques
  - Structure HTML sémantique
  - Attributs alt sur toutes les images
  - Fichiers robots.txt et sitemap XML
  - Ciblage de mots-clés locaux et sectoriels
  - Recherche approfondie de mots-clés dans un secteur hautement concurrentiel

---

## 🛠️ Stack technique

- **Frontend** : Nuxt.js, Vue Router
- **CMS** : Sanity.io (headless CMS)
- **Styling** : SASS (architecture modulaire)
- **Qualité de code** : TypeScript, ESLint
- **Déploiement** : Vercel *(en cours)*
- **Nom de domaine** : *(à préciser)*

---

## 🧩 Architecture & bonnes pratiques

### Architecture du projet
- Architecture modulaire par feature
- Composants globaux réutilisables
- Gestion de la réactivité via des composables dédiés
- Variables d'environnement sécurisées via `.env`

### Gestion des données & CMS
- Récupération des contenus depuis Sanity via des requêtes GROQ
- Schémas Sanity structurés pour le blog médical (conseils, pathologies, pratiques)
- Mise à jour du contenu sans redéploiement grâce au CMS headless
- Gestion des états de chargement et rendu conditionnel

### Clean code & conventions
- Nommage cohérent : camelCase pour les variables/fonctions, PascalCase pour les composants
- Composants courts et responsables d'une seule fonctionnalité
- TypeScript pour un code typé et maintenable
- Linting strict avec ESLint
- Centralisation des constantes (routes, breakpoints, configurations)
- Palette de couleurs définie via des variables SASS réutilisables

---

## 🎨 Conception & design

- **Maquettes réalisées sur Figma** avec validation client
- **Définition du branding** : palette de couleurs, typographies, hiérarchie visuelle adaptée au secteur médical
- **Approche mobile-first** pour garantir une expérience optimale sur tous les supports
- **Respect des demandes client** tout en proposant une identité visuelle moderne et professionnelle

---

## ⚠️ Défis techniques rencontrés

- **Développement d'un carrousel complexe** : création d'un composant personnalisé avec animations fluides et navigation intuitive
- **Gestion dynamique des urgences** : logique conditionnelle pour afficher les bonnes informations selon le contexte temporel (jours ouvrés, week-ends, jours fériés)
- **Stratégie SEO dans un secteur concurrentiel** : recherche approfondie de mots-clés pertinents pour se démarquer face à une forte concurrence locale dans le secteur dentaire
- **Intégration et configuration de Sanity** pour le blog médical avec une structure adaptée aux besoins du cabinet
- **Suivi client** : gestion de la disponibilité limitée des praticiens pour les validations et retours
- **Création de maquettes sur-mesure** : équilibre entre modernité visuelle et respect des contraintes/demandes du client

---

## 🧠 Apprentissages

- **Conception UX/UI orientée client** : adapter les maquettes aux besoins spécifiques d'un cabinet médical
- **Gestion de projet client** : communication, suivi, gestion des disponibilités et validation des livrables
- **Développement de composants complexes** : maîtrise de la création d'un carrousel personnalisé en Vue.js
- **Mise en production d'un CMS headless** : configuration complète de Sanity pour un blog médical
- **Stratégie SEO en environnement concurrentiel** : recherche et sélection de mots-clés efficaces dans un secteur saturé
- **Déploiement professionnel** : préparation au déploiement sur Vercel (configuration DNS, certificat SSL, optimisation)
- **Consolidation des compétences Nuxt.js** : SSR, routing, performance, réactivité

---

## 👤 Rôle dans le projet

- **Conception UX/UI** et réalisation des maquettes Figma
- **Développement frontend complet** (Nuxt.js, SASS, TypeScript)
- **Intégration et configuration du CMS Sanity** pour le blog médical
- **Recherche et optimisation SEO** : analyse de la concurrence et sélection de mots-clés stratégiques
- **Mise en ligne et configuration du déploiement** (Vercel + DNS) *(en cours)*
- **Maintenance et support technique**

---

## 🔮 Améliorations futures

*Aucune amélioration prévue pour le moment – le site répond aux besoins actuels du cabinet.*

---

## 🌍 Démo

🔗 **Lien vers le site** : *(déploiement en cours)*  
📸 **Screenshots** : *(à venir après déploiement)*
