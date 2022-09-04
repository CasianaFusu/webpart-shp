import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './NavigareCemsWebPart.module.scss';
import * as strings from 'NavigareCemsWebPartStrings';

import * as jQuery from 'jquery';
import 'jqueryui';

import { SPComponentLoader } from '@microsoft/sp-loader';

export interface INavigareCemsWebPartProps {
  description: string;
}

export default class NavigareCemsWebPart extends BaseClientSideWebPart<INavigareCemsWebPartProps> {

  public constructor() {
    super();
  
    SPComponentLoader.loadCss('//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css');
  }

  public render(): void {
    this.domElement.innerHTML = `
    <div class="accordion">
      <h3>Categorii de forte</h3>
        <div>
        <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Cauta structura..">

        <ul id="myUL">
          <li><a href="#">Statul Major al Fortelor Terestre (SMFT)</a></li>
          <li><a href="#">Statul Major al Fortelor Navale (SMFN)</a></li>      
          <li><a href="#">Statul Major al Fortelor Aeriene (SMFA)</a></li>
        </ul>

      </div>
      <h3>Directii</h3>
      <div>
        <input type="text" id="myInput1" onkeyup="myFunction1()" placeholder="Cauta structura..">

        <ul id="myUL1">
          <li><a href="#">Directia Personal si Mobilizare (DPM)</a></li>
          <li><a href="#">Directia Planificare Strategica (DPS)</a></li>      
          <li><a href="#">Directia Operatii (DO)</a></li>
        </ul>
      </div>
      <h3>Comandamente</h3>
      <div>
      <input type="text" id="myInput2" onkeyup="myFunction2()" placeholder="Cauta structura..">

      <ul class="myUL2">
        <li><a href="#">Comandamentul Apararii Cibernetice (CApC)</a>
          <ul class="myUL2"> 
            <li><a href="#">Agentia de Tehnologia Informatiei (ATI)</a></li>
            <li><a href="#">Agenția de Apărare Cibernetică (AAC)</a></li>
            <li><a href="#">Cifru</a></li>
            <li><a href="#">Oficiul 1</a></li>
          </ul>
        </li>
        <li><a href="#">Comandamentul Comunicațiilor și Informaticii (CCI)</a></li>      
        <li><a href="#">Comandamentul Fortelor Intrunite (CFI)</a></li>
         
      </ul>
      </div>
      <h3>Alte structuri</h3>
      <div>
        Alte structuri
      </div>
  </div>
  `;

  const accordionOptions: JQueryUI.AccordionOptions = {
    animate: true,
    collapsible: false,
    icons: {
      header: 'ui-icon-circle-arrow-e',
      activeHeader: 'ui-icon-circle-arrow-s'
    }
  };

  jQuery('.accordion', this.domElement).accordion(accordionOptions);
  require('./my-script.js');
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
