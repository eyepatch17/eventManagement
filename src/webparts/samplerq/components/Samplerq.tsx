import * as React from 'react';
import styles from './Samplerq.module.scss';
import { ISamplerqProps } from './ISamplerqProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Samplerq extends React.Component<ISamplerqProps, {}> {
  public render(): React.ReactElement<ISamplerqProps> {
    return (
      <div className={ styles.samplerq }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SfwefwefwerfharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
