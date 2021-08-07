import { animate, group, state, style, transition, trigger } from "@angular/animations";

 export let changeDivSize = trigger(
    'changeDivSize',[
        state('initial', style({
            backgroundColor : 'green',
            width : '100px',
            height : '100px'
        })),
        state('final', style({
            backgroundColor : 'red',
            width : '200px',
            height : '200px'
        })),

        transition('initial => final',animate('1500ms')),
        transition('final => initial',animate('1500ms'))
        
    ]
    );

    export let balloonEffect = trigger(
        'balloonEffect',[
            state('initial', style({
                backgroundColor : 'green',
                transform : 'scale(1)'
            })),
            state('final', style({
                backgroundColor : 'red',
                transform : 'scale(1.5)'
            })),
    
            transition('initial => final',animate('1500ms')),
            transition('final => initial',animate('1500ms'))
            
        ]
        );
    
    export let fadeInOut = trigger(
        'fadeInOut',[
            state('void',style({opacity : 0})),
            transition('void <=> *',animate(500))
        ]
    );

    export let EnterLeave =  trigger('EnterLeave', [
        state('flyIn', style({ transform: 'translateX(0)' })),
        transition(':enter', [
          style({ transform: 'translateX(-100%)' }),
          animate('0.5s 300ms ease-in')
        ]),
        transition(':leave', [
          animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
        ])
      ]);
      
      export let flyInOut= trigger('flyInOut', [
          state('in', style({
            width: 120,
            transform: 'translateX(0)', opacity: 1
          })),
          transition('void => *', [
            style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
            group([
              animate('0.3s 0.1s ease', style({
                transform: 'translateX(0)',
                width: 120
              })),
              animate('0.3s ease', style({
                opacity: 1
              }))
            ])
          ]),
          transition('* => void', [
            group([
              animate('0.3s ease', style({
                transform: 'translateX(50px)',
                width: 10
              })),
              animate('0.3s 0.2s ease', style({
                opacity: 0
              }))
            ])
          ])
        ]);
      