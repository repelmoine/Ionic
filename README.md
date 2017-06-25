PELMOINE Rémi et GIL Clément
===========================================
Rapport de projet IONIC
-----------------------

Nous avons décidé de réaliser une application intitulée « Secret Pictures » capable de prendre des photos, de les stocker en base de données. 
L’accès à l'application se fait uniquement par l’authentification par l’empreinte digitale.

----------------------------------------------------------------------------------------------------------
Les fonctionnalités natives que nous avons utilisées sont :
-	La caméra pour prendre les photos
-	Le FingerPrint Auth pour s’identifier sur Android avec l’empreinte digitale
-	Le TouchId pour s’identifier sur iOs avec l’empreinte digitale
-	La Firebas pour stocker les photos en base de données

--------------------------------------------------------

L’application Ionic est comptable sur Android et sur iOS.

------------------------------------------------------
Nous avons 4 vues :
  - une vue d'authentification
  - une vue contenant le formulaire pour ajouter un texte et une description a une photo
  - une vue listant toutes les photos
  - une vue pour prendre la photo
  
------------------------------------
Enfin nous avons un service pour le système d'authentification et un deuxième service pour la prise de photos. 
  
  Difficultés rencontrées:
  =======================
  
  Nous étions à la base partis pour réaliser une application fonctionnant avec NFC afin de pouvoir stocker les valeurs de nos cartes étudiantes et de nos cartes bancaires.
 Cependant malgré lef ait que nous ayons testé des applications fonctionnelles que nous avons trouvé sur GitHub, nous nous sommes rendu compte qu'il n'était pas possible de réaliser ce projet. 
 C'est pourquoi nous avons changé de sujet.