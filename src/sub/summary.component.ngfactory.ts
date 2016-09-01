/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/debug_context';
import * as import1 from './summary.component';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view';
import * as import4 from '@angular/core/src/linker/element';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/di/injector';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
const nodeDebugInfos_SummaryComponent_Host0:import0.StaticNodeDebugInfo[] = [new import0.StaticNodeDebugInfo([import1.SummaryComponent],import1.SummaryComponent,{})];
var renderType_SummaryComponent_Host:import2.RenderComponentType = (null as any);
class _View_SummaryComponent_Host0 extends import3.DebugAppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import4.AppElement;
  _SummaryComponent_0_4:import1.SummaryComponent;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_SummaryComponent_Host0,renderType_SummaryComponent_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_SummaryComponent_Host0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    this._el_0 = this.selectOrCreateHostElement('summary',rootSelector,this.debug(0,0,0));
    this._appEl_0 = new import4.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_SummaryComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._SummaryComponent_0_4 = new import1.SummaryComponent();
    this._appEl_0.initComponent(this._SummaryComponent_0_4,[],compView_0);
    compView_0.create(this._SummaryComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import1.SummaryComponent) && (0 === requestNodeIndex))) { return this._SummaryComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_SummaryComponent_Host0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import3.AppView<any> {
  if ((renderType_SummaryComponent_Host === (null as any))) { (renderType_SummaryComponent_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,[],{})); }
  return new _View_SummaryComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const SummaryComponentNgFactory:import10.ComponentFactory<import1.SummaryComponent> = new import10.ComponentFactory<import1.SummaryComponent>('summary',viewFactory_SummaryComponent_Host0,import1.SummaryComponent);
const styles_SummaryComponent:any[] = [];
const nodeDebugInfos_SummaryComponent0:import0.StaticNodeDebugInfo[] = [
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{})
]
;
var renderType_SummaryComponent:import2.RenderComponentType = (null as any);
class _View_SummaryComponent0 extends import3.DebugAppView<import1.SummaryComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _text_5:any;
  _text_6:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_SummaryComponent0,renderType_SummaryComponent,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_SummaryComponent0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n  ',this.debug(0,0,0));
    this._el_1 = this.renderer.createElement(parentRenderNode,'div',this.debug(1,1,2));
    this._text_2 = this.renderer.createText(this._el_1,'\n    ',this.debug(2,1,7));
    this._el_3 = this.renderer.createElement(this._el_1,'h2',this.debug(3,2,4));
    this._text_4 = this.renderer.createText(this._el_3,'Summary Detail',this.debug(4,2,8));
    this._text_5 = this.renderer.createText(this._el_1,'\n  ',this.debug(5,2,27));
    this._text_6 = this.renderer.createText(parentRenderNode,'\n  ',this.debug(6,3,8));
    this.init([],[
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._text_5,
      this._text_6
    ]
    ,[],[]);
    return (null as any);
  }
}
export function viewFactory_SummaryComponent0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import3.AppView<import1.SummaryComponent> {
  if ((renderType_SummaryComponent === (null as any))) { (renderType_SummaryComponent = viewUtils.createRenderComponentType('/Users/yosuke/workspaces/javascript/ng2-studies/routing-with-lazy-load/src/sub/summary.component.ts class SummaryComponent - inline template',0,import9.ViewEncapsulation.None,styles_SummaryComponent,{})); }
  return new _View_SummaryComponent0(viewUtils,parentInjector,declarationEl);
}