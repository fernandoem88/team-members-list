import * as React from 'react';
import { connect } from 'react-redux';
import { removeTesterFromTheTeam } from 'ReduxStore/actions';
import { TesterCloseIcon, TesterImage, UserRoleAndName, Card } from './styled';
import { ITesterItemProps } from './interfaces';

export const exitingDuration = 200;
class TesterItem extends React.Component<
    ITesterItemProps,
    { hovered: boolean; exiting: boolean }
> {
    private exitingTimeoutId: NodeJS.Timeout;
    constructor(props: any) {
        super(props);
        this.state = {
            hovered: false,
            exiting: false
        };
    }
    componentWillUnmount = () => {
        if (this.exitingTimeoutId) {
            clearTimeout(this.exitingTimeoutId);
        }
    };

    render() {
        const { username, role, id } = this.props;
        const exitingClassname = this.state.exiting ? 'exiting' : '';
        return (
            <Card
                key={id}
                onMouseOver={this.onMouseOver}
                onMouseLeave={this.onMouseLeave}
                className={exitingClassname}
            >
                {this.renderUserImage(id)}
                <UserRoleAndName>
                    <span className="role">
                        {role}
                        {this.renderExternalUserMark()}
                    </span>
                    <span className="username">{username}</span>
                </UserRoleAndName>
            </Card>
        );
    }
    private renderUserImage = (id: number) => {
        return this.state.hovered ? (
            <TesterCloseIcon onClick={() => this.removeTester(id)}>
                &#xd7;
            </TesterCloseIcon>
        ) : (
            <TesterImage
                src={'assets/' + this.props.picture}
                alt=""
                className="not-hoverable"
            />
        );
    };

    private renderExternalUserMark = () => {
        return this.props.role === 'External' ? (
            <span className="external-mark">*</span>
        ) : null;
    };

    private removeTester = (id: number) => {
        const { removeTesterFromTheTeam: removeTester } = this.props;

        if (removeTester) {
            this.setState({ exiting: true }, () => {
                this.exitingTimeoutId = setTimeout(() => {
                    removeTester(id);
                }, exitingDuration);
            });
        }
    };

    private onMouseOver = () => {
        this.setState({ hovered: true });
    };

    private onMouseLeave = () => {
        this.setState({ hovered: false });
    };
}

const mapDispatchToProps = { removeTesterFromTheTeam };

export default connect(
    null,
    mapDispatchToProps
)(TesterItem);
