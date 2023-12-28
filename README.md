# English version

# Tiny-modale-react - A React Modal Component
### version 0.1.0

## Overview

`Tiny-Modale-React` is a versatile React modal component with customizable animations and style properties. Utilizing `styled-components` for styling, it offers a flexible solution for integrating modals into React applications. This component is designed to be easily adaptable to a variety of use cases, ensuring seamless integration and enhanced user experience.

## Features

- **Custom Animations:** Includes `BumpAnimation` and `OpacityAnimation` for dynamic presentation.
- **Styled with Styled-Components:** Offers extensive styling flexibility.
- **Conditional Styles:** Adjusts styles based on component props.
- **Comprehensive Prop Control:** Allows detailed customization of appearance and behavior.

## Installation

Install TinyModale component via npm:

```bash
npm install tiny-modale-react
```

## Import

import TinyModale in your project:

```jsx
import TinyModale from `tiny-modale-react`
```

## Examples

The `< TinyModale />` component offers extensive customization through its props. Below are some examples to illustrate different ways it can be used and customized in your React projects. These examples are meant to be a starting point and are not exhaustive - feel free to explore and customize further according to your needs.

### Basic Usage

A simple example to show basic usage with a custom message:

```jsx
  <TinyModale
  showButton={true} // true to show the supplemental button, false to hide it
  message="Welcome to my site!" // Any string message
/>
/>
```

### Custom Background and Animations

Customize the background and animations to fit the style of your application:

```jsx
<TinyModale
  showButton={false} // true to show the supplemental button, false to hide it
  message="Notification Test!" // Any string message
  bgcontainercolor="rgba(0, 0, 0, 0.8)" // Any valid CSS color value
  bgcontaineropacity={0.5} // Any number between 0 (transparent) and 1 (opaque)
  bgAnimation="fade" // "fade", "bump" for now
/>
```

### Comprehensive Style Customization

A more complex example illustrating comprehensive style customization, including colors, typography, and animations:

```jsx
<TinyModale
  showButton={true} // true to show the button, false to hide it
  message="Operation success" // Any string message
  bgcontainercolor="blue" // Any valid CSS color value
  bgcontaineropacity={0.7} // Any number between 0 (transparent) and 1 (opaque)
  textSize="18px" // Any valid CSS font-size value
  textFamily="Arial" // Any valid CSS font-family value
  modaleBoxColor="white" // Any valid CSS color value
  modaleRadius="15px" // Any valid CSS border-radius value
  modaleAnimation="bump" // "fade", "bump" for now
  modaleOpacity={0.9} // Any number between 0 (transparent) and 1 (opaque)
  buttonColor="green" // Any valid CSS color value
  buttonWidth="100px" // Any valid CSS width value
  buttonHeight="50px" // Any valid CSS height value
  buttonTextContentColor="white" // Any valid CSS color value
  buttonTextSize="20px" // Any valid CSS font-size value
  buttonBorder="2px solid black" // Any valid CSS border value
  buttonmodaleRadius="5px" // Any valid CSS border-radius value
  buttonMargin="10px" // Any valid CSS margin value
  buttonPadding="5px" // Any valid CSS padding value
  buttonBgColor="darkblue" // Any valid CSS color value
  buttonCursor="pointer" // CSS cursor types like "pointer", "default", etc.
/>
```

These examples should help you get started with integrating and customizing the `TinyModale` component in your own projects. So experiment and find what works best for your application!

## Props

| Prop Name                | Type     | Description                                                   | Example Values                             | Default Values                                      |
| ------------------------ | -------- | ------------------------------------------------------------- | ------------------------------------------ | --------------------------------------------------- |
| `showButton`             | boolean  | Controls the display of the button in the modal.              | `true`, `false`                            | `false`                                             |
| `showModal`              | function | Function to determine if the modal should be shown.           | N/A                                        | `() => true`                                        |
| `message`                | string   | Specifies the message to be displayed in the modal.           | `"Welcome!"`, `"Form submitted"`           | `"Employee Created !"`                              |
| `onClose`                | function | Function to be called when the modal is closed.               | N/A                                        | `() => { console.log("onClose ok"); return false}`  |
| `btnOnClick`             | function | Callback function triggered on button click within the modal. | `() => console.log("Clicked!")`            | `() => { console.log("onClick ok"); return false }` |
| `setActiveModale`        | function | Function to set the active state of the modal.                | `() => setActive(!active)`                 | `() => true`                                        |
| `bgcontainercolor`       | string   | Sets the background color of the modal.                       | `"rgba(0,0,0,0.5)"`, `"#fff"`              | `"black"`                                           |
| `bgcontaineropacity`     | number   | Controls the opacity of the modal background.                 | `0.5`, `1`                                 | `0.5`                                               |
| `bgAnimation`            | string   | Defines the animation for the modal background.               | `"fade"`, `"fade"`                        | `"fade"`                                            |
| `textFamily`             | string   | Specifies the font family for the modal text.                 | `"Arial"`, `"Times New Roman"`             | `"arial"`                                           |
| `textSize`               | string   | Sets the font size for the modal text.                        | `"16px"`, `"2em"`                          | `"20px"`                                            |
| `modaleSize`             | string   | The size of the modal.                                        | `"small"`, `"medium"`, `"large"`, `"full"` | `"medium"`                                          |
| `modaleBoxColor`         | string   | Determines the color of the modal box.                        | `"#f0f0f0"`, `"blue"`                      | `"white"`                                           |
| `modaleRadius`           | string   | Sets the border-radius of the modal box.                      | `"10px"`, `"50%"`                          | `"15px"`                                            |
| `modaleAnimation`        | string   | Specifies the animation for the modal box.                    | `"zoom"`, `"bounce"`                       | `"bump"`                                            |
| `modaleOpacity`          | number   | Controls the opacity of the modal box.                        | `0.8`, `1`                                 | `1`                                                 |
| `closeitembgColor`       | string   | The background color of the close item.                       | `"white"`, `"red"`                         | `"white"`                                           |
| `closeItemFontColor`     | string   | The font color of the close item.                             | `"black"`, `"green"`                       | `"black"`                                           |
| `closeitemButtonsize`    | string   | Determines the size of the close item button.                 | `"20px"`, `"30px"`                         | `"20px"`                                            |
| `closeItemTextColor`     | string   | Sets the text color of the close item.                        | `"green"`, `"purple"`                      | `"black"`                                           |
| `closeItemButtonRadius`  | string   | Defines the border-radius of the close button.                | `"5px"`, `"15px"`                          | `"25px"`                                            |
| `buttonTextContent`      | string   | The content of the button.                                    | `"ok"`, `"submit"`                         | `"ok"`                                              |
| `buttonColor`            | string   | Sets the color of the modal button.                           | `"#007bff"`, `"orange"`                    | `"black"`                                           |
| `buttonWidth`            | string   | Determines the width of the modal button.                     | `"100px"`, `"50%"`                         | `"100px"`                                           |
| `buttonHeight`           | string   | Specifies the height of the modal button.                     | `"30px"`, `"3em"`                          | `"50px"`                                            |
| `buttonTextContentColor` | string   | Sets the text color of the button content.                    | `"white"`, `"#333"`                        | `"black"`                                           |
| `buttonTextSize`         | string   | Defines the font size of the button text.                     | `"14px"`, `"18px"`                         | `"20px"`                                            |
| `buttonBorder`           | string   | Sets the border style of the modal button.                    | `"1px solid #ddd"`, `"none"`               | `"1px solid black"`                                 |
| `buttonmodaleRadius`     | string   | Determines the border-radius of the modal button.             | `"4px"`, `"10px"`                          | `"25px"`                                            |
| `buttonMargin`           | string   | Sets the margin around the modal button.                      | `"5px"`, `"10px 15px"`                     | `"20px"`                                            |
| `buttonPadding`          | string   | Defines the padding within the modal button.                  | `"8px 12px"`, `"10px 20px"`                | `"10px"`                                            |
| `buttonBgColor`          | string   | Specifies the background color of the button.                 | `"#28a745"`, `"transparent"`               | `"transparent"`                                     |
| `buttonCursor`           | string   | Sets the cursor type when hovering over the button.           | `"pointer"`, `"default"`                   | `"pointer"`                                         |

## Contributing

Contributions are welcome. To contribute, please fork the repository, create a branch, make your changes, and submit a pull request.

## License

MIT License

Copyright (c) [2023] [R.Chon]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

# version Française

# Tiny-modale-react - Un composant modal React

## Vue d'ensemble

`TinyModale` est un composant modal React polyvalent avec des animations et des propriétés de style personnalisables. Utilisant `styled-components` pour le style, il offre une solution flexible pour intégrer des modaux dans les applications React. Ce composant est conçu pour être facilement adaptable à une variété de cas d'utilisation, assurant une intégration transparente et une expérience utilisateur améliorée.

## Caractéristiques

- **Animations personnalisées :** Inclut `BumpAnimation` et `OpacityAnimation` pour une présentation dynamique.
- **Stylé avec Styled-Components :** Offre une grande flexibilité de style.
- **Styles conditionnels :** Ajuste les styles en fonction des propriétés du composant.
- **Contrôle complet des propriétés :** Permet une personnalisation détaillée de l'apparence et du comportement.

## Installation

Installez TinyModale via npm :

```bash
npm install tiny-modale-react
```

## Importation

import TinyModale dans votre projet :

```jsx
import TinyModale from `tiny-modale-react`
```

## Exemples

Le composant `< TinyModale >` offre une personnalisation étendue via ses props. Voici quelques exemples pour illustrer les différentes façons dont il peut être utilisé et personnalisé dans vos projets React. Ces exemples sont destinés à être un point de départ et ne sont pas exhaustifs - n'hésitez pas à explorer et à personnaliser davantage en fonction de vos besoins.

### Utilisation de base

Un exemple simple pour montrer l'utilisation de base avec un message personnalisé :

```jsx
<TinyModale
  
  message="welcome to my site!" // Tout message de chaîne
/>
```

### Personnalisation de l'arrière-plan et des animations

Personnalisez l'arrière-plan et les animations pour s'adapter au style de votre application :

```jsx
<TinyModale
  showButton={true} // true pour afficher le bouton, false pour le masquer
  message="Notification est!" // Tout message de chaîne
  bgcontainercolor="rgba(0, 0, 0, 0.8)" // Toute valeur de couleur CSS valide
  bgcontaineropacity={0.5} // Tout nombre entre 0 (transparent) et 1 (opaque)
  bgAnimation="fade" // "fade" et bump pour le moment
/>
```

### Personnalisation complète du style

Un exemple plus complexe illustrant une personnalisation complète du style, y compris les couleurs, la typographie et les animations :

```jsx
<TinyModale
  showButton // true pour afficher le bouton, false pour le masquer
  message="Operation success" // Tout message de chaîne
  bgcontainercolor="blue" // Toute valeur de couleur CSS valide
  bgcontaineropacity={0.7} // Tout nombre entre 0 (transparent) et 1 (opaque)
  textSize="18px" // Toute valeur de taille de police CSS valide
  textFamily="Arial" // Toute valeur de famille de police CSS valide
  modaleBoxColor="white" // Toute valeur de couleur CSS valide
  modaleRadius="15px" // Toute valeur de border-radius CSS valide
  modaleAnimation="bump" // "fade", "bump" pour le moment
  modaleOpacity={0.9} // Tout nombre entre 0 (transparent) et 1 (opaque)
  buttonColor="green" // Toute valeur de couleur CSS valide
  buttonWidth="100px" // Toute valeur de largeur CSS valide
  buttonHeight="50px" // Toute valeur de hauteur CSS valide
  buttonTextContentColor="white" // Toute valeur de couleur CSS valide
  buttonTextSize="20px" // Toute valeur de taille de police CSS valide
  buttonBorder="2px solid black" // Toute valeur de bordure CSS valide
  buttonmodaleRadius="5px" // Toute valeur de border-radius CSS valide
  buttonMargin="10px" // Toute valeur de marge CSS valide
  buttonPadding="5px" // Toute valeur de rembourrage CSS valide
  buttonBgColor="darkblue" // Toute valeur de couleur CSS valide
  buttonCursor="pointer" // Types de curseur CSS comme "pointer", "default", etc.
/>
```

Ces exemples devraient vous aider à démarrer avec l'intégration et la personnalisation du composant `TinyModale` dans vos propres projets. Alors expérimentez et trouvez ce qui fonctionne le mieux pour votre application !

## Props

| Nom de la prop           | Type     | Description                                                             | Exemples de valeurs                        | Valeurs par défaut                                  |
| ------------------------ | -------- | ----------------------------------------------------------------------- | ------------------------------------------ | --------------------------------------------------- |
| `showButton`             | boolean  | Contrôle l'affichage du bouton dans le modal.                           | `true`, `false`                            | `false`                                             |
| `showModal`              | function | Fonction pour déterminer si le modal doit être affiché.                 | N/A                                        | `() => true`                                        |
| `message`                | string   | Spécifie le message à afficher dans le modal.                           | `"Welcome!"`, `"Form submitted"`           | `"Employee Created !"`                              |
| `onClose`                | function | Fonction à appeler lorsque le modal est fermé.                          | N/A                                        | `() => { console.log("onClose ok"); return false}`  |
| `btnOnClick`             | function | Fonction de rappel déclenchée lors du clic sur le bouton dans le modal. | `() => console.log("Clicked!")`            | `() => { console.log("onClick ok"); return false }` |
| `setActiveModale`        | function | Fonction pour définir l'état actif du modal.                            | `() => setActive(!active)`                 | `() => true`                                        |
| `bgcontainercolor`       | string   | Définit la couleur d'arrière-plan du modal.                             | `"rgba(0,0,0,0.5)"`, `"#fff"`              | `"black"`                                           |
| `bgcontaineropacity`     | number   | Contrôle l'opacité de l'arrière-plan du modal.                          | `0.5`, `1`                                 | `0.5`                                               |
| `bgAnimation`            | string   | Définit l'animation pour l'arrière-plan du modal.                       | `"fade"`, `"bump"`                        | `"fade"`                                            |
| `textFamily`             | string   | Spécifie la famille de polices pour le texte du modal.                  | `"Arial"`, `"Times New Roman"`             | `"arial"`                                           |
| `textSize`               | string   | Définit la taille de police pour le texte du modal.                     | `"16px"`, `"2em"`                          | `"20px"`                                            |
| `modaleSize`             | string   | La taille du modal.                                                     | `"small"`, `"medium"`, `"large"`, `"full"` | `"medium"`                                          |
| `modaleBoxColor`         | string   | Détermine la couleur de la boîte du modal.                              | `"#f0f0f0"`, `"blue"`                      | `"white"`                                           |
| `modaleRadius`           | string   | Définit le border-radius de la boîte du modal.                          | `"10px"`, `"50%"`                          | `"15px"`                                            |
| `modaleAnimation`        | string   | Spécifie l'animation pour la boîte du modal.                            | `"zoom"`, `"bounce"`                       | `"bump"`                                            |
| `modaleOpacity`          | number   | Contrôle l'opacité de la boîte du modal.                                | `0.8`, `1`                                 | `1`                                                 |
| `closeitembgColor`       | string   | La couleur d'arrière-plan de l'élément de fermeture.                    | `"white"`, `"red"`                         | `"white"`                                           |
| `closeItemFontColor`     | string   | La couleur de police de l'élément de fermeture.                         | `"black"`, `"green"`                       | `"black"`                                           |
| `closeitemButtonsize`    | string   | Détermine la taille du bouton de l'élément de fermeture.                | `"20px"`, `"30px"`                         | `"20px"`                                            |
| `closeItemTextColor`     | string   | Définit la couleur du texte de l'élément de fermeture.                  | `"green"`, `"purple"`                      | `"black"`                                           |
| `closeItemButtonRadius`  | string   | Définit le border-radius du bouton de fermeture.                        | `"5px"`, `"15px"`                          | `"25px"`                                            |
| `buttonTextContent`      | string   | Le contenu du bouton.                                                   | `"ok"`, `"submit"`                         | `"ok"`                                              |
| `buttonColor`            | string   | Définit la couleur du bouton du modal.                                  | `"#007bff"`, `"orange"`                    | `"black"`                                           |
| `buttonWidth`            | string   | Détermine la largeur du bouton du modal.                                | `"100px"`, `"50%"`                         | `"100px"`                                           |
| `buttonHeight`           | string   | Spécifie la hauteur du bouton du modal.                                 | `"30px"`, `"3em"`                          | `"50px"`                                            |
| `buttonTextContentColor` | string   | Définit la couleur du contenu du bouton.                                | `"white"`, `"#333"`                        | `"black"`                                           |
| `buttonTextSize`         | string   | Définit la taille de police du texte du bouton.                         | `"14px"`, `"18px"`                         | `"20px"`                                            |
| `buttonBorder`           | string   | Définit le style de bordure du bouton du modal.                         | `"1px solid #ddd"`, `"none"`               | `"1px solid black"`                                 |
| `buttonmodaleRadius`     | string   | Détermine le border-radius du bouton du modal.                          | `"4px"`, `"10px"`                          | `"25px"`                                            |
| `buttonMargin`           | string   | Définit la marge autour du bouton du modal.                             | `"5px"`, `"10px 15px"`                     | `"20px"`                                            |
| `buttonPadding`          | string   | Définit le rembourrage dans le bouton du modal.                         | `"8px 12px"`, `"10px 20px"`                | `"10px"`                                            |
| `buttonBgColor`          | string   | Spécifie la couleur d'arrière-plan du bouton.                           | `"#28a745"`, `"transparent"`               | `"transparent"`                                     |
| `buttonCursor`           | string   | Définit le type de curseur lors du survol du bouton.                    | `"pointer"`, `"default"`                   | `"pointer"`                                         |

## Contribuer

Les contributions sont les bienvenues. Pour contribuer, veuillez forker le dépôt, créer une branche, faire vos modifications et soumettre une demande d'extraction.

## Licence

Licence MIT

Droits d'auteur (c) [2023] [R.Chon]

La permission est accordée par la présente, gratuitement, à toute personne obtenant une copie
de ce logiciel et des fichiers de documentation associés (le "Logiciel"), de traiter
dans le Logiciel sans restriction, y compris sans limitation des droits
d'utiliser, de copier, de modifier, de fusionner, de publier, de distribuer, de sous-licencier et/ou de vendre
des copies du Logiciel, et de permettre aux personnes auxquelles le Logiciel est
fourni de le faire, sous réserve des conditions suivantes :

L'avis de droit d'auteur ci-dessus et le présent avis de permission doivent être inclus dans tous
copies ou parties substantielles du Logiciel.

LE LOGICIEL EST FOURNI "TEL QUEL", SANS GARANTIE D'AUCUNE SORTE, EXPRESSE OU
IMPLICITE, Y COMPRIS MAIS SANS S'Y LIMITER LES GARANTIES DE QUALITÉ MARCHANDE,
D'ADÉQUATION À UN USAGE PARTICULIER ET D'ABSENCE DE CONTREFAÇON. EN AUCUN CAS, LES
AUTEURS OU LES TITULAIRES DU DROIT D'AUTEUR NE SERONT RESPONSABLES DE TOUT DOMMAGE, RÉCLAMATION
OU AUTRE RESPONSABILITÉ, QUE CE SOIT DANS LE CADRE D'UN CONTRAT, D'UN DÉLIT OU AUTREMENT, DÉCOULANT DE,
HORS OU EN RELATION AVEC LE LOGICIEL OU L'UTILISATION OU D'AUTRES TRANSACTIONS DANS LE
LOGICIEL.

---
