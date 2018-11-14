import * as React from 'react';
import { Redirect, Route, RouteProps, Switch } from 'react-router-dom';
import InfiniteRoller from '../InfiniteRoller';
import TeamBox from '../TeamBox';

export interface IAppRouteOptions {
    component: React.ComponentClass | React.StatelessComponent;
    path?: string;
}

export const routesPathes = {
    home: '/home',
    teamMemberPage: '/infinite-roller'
};

const routes: IAppRouteOptions[] = [
    {
        component: TeamBox,
        path: routesPathes.home
    },
    {
        component: InfiniteRoller,
        path: routesPathes.teamMemberPage
    },
    {
        component: ({ location }: RouteProps) => {
            return location && location.pathname === '/' ? (
                <Redirect to={routesPathes.home} />
            ) : (
                <div>Not found</div>
            );
        }
    }
];

export default () => {
    return (
        <Switch>
            {routes.map(r => (
                <Route {...r} key={r.path || '404'} />
            ))}
        </Switch>
    );
};
