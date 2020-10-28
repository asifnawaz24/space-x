import React, { Component } from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { LaunchList } from '.';
import { InMemoryCache, ApolloClient, ApolloProvider } from '@apollo/client';

describe('LaunchLIst', () => {
    const waitTime: number = 3000;
    let container: ReactWrapper<{}, {}, Component<{}, {}, any>>;
    const client = new ApolloClient({
        uri: "https://spacexdata.herokuapp.com/graphql",
        cache: new InMemoryCache(),
    });

    beforeEach(() => {
        container = mount(
            <ApolloProvider client={client}>
                <LaunchList handleIdChange={jest.fn} />
            </ApolloProvider>
        );
    });

    it('should Render a div', () => {
        expect(container.find('div').length).toEqual(1);
    });

    it('should Render li', async (done) => {
        setTimeout(() => {
            container.update();
            container.update();
            // console.log(container.debug());
            expect(container.find('li').length).toBeGreaterThan(0);
            done();
        }, waitTime);
    });

});
