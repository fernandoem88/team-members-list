import * as React from 'react';
import { RollerChild, RollerContainer } from './styled';
import { IRollerProps, IRollerState } from './utils';
import { TimelineMax, Timeline } from 'gsap'; // TweenConfig

export default class Roller extends React.Component<
    IRollerProps,
    IRollerState
> {
    static Child = RollerChild;

    private PreviousChildRef: React.ReactNode = null;
    private NextChildRef: React.ReactNode = null;
    private currentFrontChildName: string;
    private TL: Timeline;
    constructor(props: any) {
        super(props);
        this.state = {
            previousChildIndex: null,
            currentChildIndex: this.props.nextChildIndex || 0,
            nextChildIndex: null
        };
    }

    componentWillUnmount = () => {
        if (this.TL) {
            this.TL.kill();
        }
    };
    componentWillReceiveProps = ({
        nextChildIndex: nextChildIndexProps
    }: IRollerProps) => {
        if (nextChildIndexProps !== undefined && nextChildIndexProps !== null) {
            this.rollToNthChild(nextChildIndexProps);
        }
    };

    render() {
        const { containerStyle } = this.props;
        const { nextChildIndex, previousChildIndex } = this.state;
        const rollingClass =
            nextChildIndex !== null && previousChildIndex !== null
                ? ' rolling'
                : '';
        return (
            <RollerContainer
                containerStyle={containerStyle}
                className={'roller-container' + rollingClass}
            >
                {this.renderChildren()}
            </RollerContainer>
        );
    }

    private renderChildren = () => {
        const { children, duration } = this.props;
        const { currentChildIndex } = this.state;
        return children
            ? React.Children.map(children, (ReactChild: any, index) => {
                  const cn0 = this.getChildElementClass(index);
                  if (cn0 === null) {
                      return null;
                  }

                  if (index === currentChildIndex) {
                      this.currentFrontChildName =
                          ReactChild.props.rollerChildname;
                  }
                  const { className: cn1 } = ReactChild.props;
                  const className = ['roller-item', cn0, cn1]
                      .filter(cn => cn != null)
                      .join(' ');
                  const refProps = { ref: this.createRefSetter(index) };
                  return React.cloneElement(ReactChild, {
                      ...ReactChild.props,
                      ...refProps,
                      className,
                      duration
                  });
              })
            : null;
    };

    private createRefSetter = (index: number) => {
        const { previousChildIndex, nextChildIndex } = this.state;
        return (ref: React.ReactNode) => {
            switch (index) {
                case previousChildIndex:
                    this.PreviousChildRef = ref;
                    break;
                case nextChildIndex:
                    this.NextChildRef = ref;
                    break;
            }
        };
    };

    private getChildElementClass = (index: number | null) => {
        if (index === null) {
            return null;
        }
        const {
            previousChildIndex,
            currentChildIndex,
            nextChildIndex
        } = this.state;
        return index === previousChildIndex
            ? 'previous-rolling-item'
            : index === nextChildIndex
            ? 'next-rolling-item'
            : index === currentChildIndex
            ? 'current-rolling-item'
            : null;
    };

    /**
     * @param nthChildIndex
     */
    private rollToNthChild = (nextChildIndex: number | null) => {
        const { children } = this.props;
        const { currentChildIndex: previous } = this.state;
        const childrenLength = React.Children.count(children);
        if (
            previous === null ||
            nextChildIndex === null ||
            nextChildIndex === previous ||
            childrenLength < 2
        ) {
            return;
        }
        const errorMessage =
            nextChildIndex >= childrenLength
                ? `the maximum rolling index is ${childrenLength -
                      1} but received ${nextChildIndex}`
                : nextChildIndex < 0
                ? `the minimu rolling index is 0 but received ${nextChildIndex}`
                : null;
        if (errorMessage !== null) {
            throw new Error(errorMessage);
        }

        this.setState(
            {
                previousChildIndex: previous,
                currentChildIndex: null,
                nextChildIndex
            },
            this.startRolling
        );
    };

    private startRolling = () => {
        // the duration prop is in ms. but TL takes it in seconds
        const duration = this.props.duration / 2000;
        const TL = new TimelineMax();
        this.TL = TL;
        const frontElement: any = this.PreviousChildRef;
        const backElement: any = this.NextChildRef;
        TL.set(frontElement, { zIndex: 2, transformOrigin: '100% center' });
        TL.set(backElement, { zIndex: 1, transformOrigin: '0% center' });

        TL.to(frontElement, duration, {
            transform: 'translateX(70%) rotateX(-15deg) rotateY(6deg)'
        })
            .to(backElement, duration, {
                transform: 'translateX(-40%) rotateX(-15deg) rotateY(6deg)',

                delay: -1 * duration
            })
            .set(frontElement, { 'z-index': 1 })
            .set(backElement, { 'z-index': 2 })
            .to(frontElement, duration, {
                transform: 'translateX(0%)'
            })
            .to(backElement, duration, {
                transform: 'translateX(0%)',
                delay: -1 * duration,
                onComplete: this.finishRolling
            });
    };

    private finishRolling = () => {
        const { nextChildIndex: current } = this.state;

        this.setState(
            {
                previousChildIndex: null,
                nextChildIndex: null,
                currentChildIndex: current
            },
            this.onRollingDone
        );
    };

    /**
     *
     */
    private onRollingDone = () => {
        const { currentChildIndex } = this.state;
        if (this.props.onRollingDone) {
            this.props.onRollingDone(
                currentChildIndex,
                this.currentFrontChildName
            );
        }
    };
}
