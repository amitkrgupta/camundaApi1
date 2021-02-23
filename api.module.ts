import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { ConditionService } from './api/condition.service';
import { DeploymentService } from './api/deployment.service';
import { EngineService } from './api/engine.service';
import { EventSubscriptionService } from './api/eventSubscription.service';
import { ExternalTaskService } from './api/externalTask.service';
import { MessageService } from './api/message.service';
import { MetricsService } from './api/metrics.service';
import { ProcessDefinitionService } from './api/processDefinition.service';
import { ProcessInstanceService } from './api/processInstance.service';
import { SchemaLogService } from './api/schemaLog.service';
import { SignalService } from './api/signal.service';
import { TaskService } from './api/task.service';
import { TaskAttachmentService } from './api/taskAttachment.service';
import { TaskCommentService } from './api/taskComment.service';
import { TaskIdentityLinkService } from './api/taskIdentityLink.service';
import { TaskLocalVariableService } from './api/taskLocalVariable.service';
import { TaskVariableService } from './api/taskVariable.service';
import { VersionService } from './api/version.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    ConditionService,
    DeploymentService,
    EngineService,
    EventSubscriptionService,
    ExternalTaskService,
    MessageService,
    MetricsService,
    ProcessDefinitionService,
    ProcessInstanceService,
    SchemaLogService,
    SignalService,
    TaskService,
    TaskAttachmentService,
    TaskCommentService,
    TaskIdentityLinkService,
    TaskLocalVariableService,
    TaskVariableService,
    VersionService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
