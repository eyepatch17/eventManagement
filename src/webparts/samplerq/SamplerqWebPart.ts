import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import '../../assets/styles.css';
import * as strings from 'SamplerqWebPartStrings';
import Samplerq from './components/Samplerq';
import { ISamplerqProps } from './components/ISamplerqProps';

export interface ISamplerqWebPartProps {
  description: string;
}

export default class SamplerqWebPart extends BaseClientSideWebPart<ISamplerqWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISamplerqProps> = React.createElement(
      Samplerq,
      {
        description: this.properties.description
      }
    );
    ReactDom.render(element, this.domElement);
  }
  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
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
