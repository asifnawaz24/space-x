import React, { Component } from 'react';
import { ReactWrapper, mount } from 'enzyme';
import { LaunchProfile } from '.';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

describe('LaunchProfile', () => {
    const waitTime: number = 3000;
    let container: ReactWrapper<{}, {}, Component<{}, {}, any>>;
    const client = new ApolloClient({
        uri: "https://spacexdata.herokuapp.com/graphql",
        cache: new InMemoryCache(),
    });

    beforeEach(() => {
        container = mount(
            <ApolloProvider client={client}>
                <LaunchProfile id={42} />
            </ApolloProvider>
        );
    });

    it('should render a div', () => {
        expect(container.find('div').length).toEqual(1);
    });
    
    it('should Render status', async (done) => {
        setTimeout(() => {
            container.update();
            expect(container.find('.LaunchProfile__status').length).toEqual(1);
            done();
        }, waitTime);
    });

    it('should Render title', async (done) => {
        setTimeout(() => {
            container.update();
            expect(container.find('.LaunchProfile__title').length).toEqual(1);
            done();
        }, waitTime);
    });

    it('should Render description', async (done) => {
        setTimeout(() => {
            container.update();
            expect(container.find('.LaunchProfile__description').length).toEqual(1);
            done();
        }, waitTime);
    });

    it('should Render images', async (done) => {
        setTimeout(() => {
            container.update();
            expect(container.find('.LaunchProfile__image-list').length).toEqual(1);
            done();
        }, waitTime);
    });
    
});

