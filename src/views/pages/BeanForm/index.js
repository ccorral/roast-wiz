import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { authActions } from 'src/core/auth';

import { beanActions, getBeans, isFetchingBeans, getBeanDetail, getBeanRoastList } from 'src/core/beans';
import { roastActions, getRoasts, isFetchingRoasts, getRoastDetail, getBeanForRoast } from 'src/core/roasts';

import BeanDescription from '../../components/BeanDescription';


import Box from 'grommet/components/Box';
import Article from 'grommet/components/Article';
import Paragraph from 'grommet/components/Paragraph';
import Split from 'grommet/components/Split';
import Spinning from 'grommet/components/icons/Spinning';
import Value from 'grommet/components/Value';
import Section from 'grommet/components/Section';
import Label from 'grommet/components/Label';

import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';

import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';

import { pick } from 'lodash';

class BeanForm extends Component {
    constructor(props) {
      super(props)
      this.state = {
        id: '',
        name: '',
        origin: '',
        region: '',
        wash_process: '',
        roast_suggestion: '',
        variety: '',
        altitude: '',
        description: ''
      }
      this.handleInputChange = this.handleInputChange.bind(this)
      this.handeSuggestionSelect = this.handeSuggestionSelect.bind(this)
      this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    componentDidMount() {
        // const { bean } = this.props
        // const bean_detail = pick(bean, ['id', 'name', 'origin', 'region', 'wash_process', 'roast_suggestion', 'variety', 'altitude', 'description'])
        // this.setState({ ...bean_detail })
    }

    handleInputChange(e) {
      this.setState({ [e.target.name]: e.target.value })
    }

    handeSuggestionSelect(e) {
      this.setState({ [e.target.name]: e.suggestion })
    }

    handleFormSubmit(e) {
        e.preventDefault()
        console.log(this.state);
    }

    render() {
      const { name, origin, region, wash_process, roast_suggestion, variety, altitude, description } = this.state
      return (
        <Form pad={{ horizontal: 'large', vertical: 'none' }} style={{width: '100%'}}>
            <Header>
                <Heading>
                    Sample Header
                </Heading>
            </Header>
            <FormField label='Name' style={{margin: '10px'}}>
                <TextInput id='name'
                    name='name'
                    value={name}
                    onDOMChange={this.handleInputChange}
                />
            </FormField>
            <FormField label='Origin' style={{margin: '10px'}}>
                <TextInput id='origin'
                    name='origin'
                    value={origin}
                    onDOMChange={this.handleInputChange}
                    onSelect={this.handeSuggestionSelect}
                    suggestions={['Africa and Yemen', 'Central America', 'Indonesia', 'South America', 'Blend']}
                />
            </FormField>
            <FormField label='Region' style={{margin: '10px'}}>
                <TextInput id='region'
                    name='region'
                    value={region}
                    onDOMChange={this.handleInputChange}
                />
            </FormField>
            <FormField label='Process' style={{margin: '10px'}}>
                <TextInput id='wash_process'
                    name='wash_process'
                    value={wash_process}
                    onDOMChange={this.handleInputChange}
                    onSelect={this.handeSuggestionSelect}
                    suggestions={['Dry Process', 'Wet Process', 'Semi-wet Process', 'Honey Process']}
                />
            </FormField>
            <FormField label='Roast Suggestion' style={{margin: '10px'}}>
                <TextInput id='roast_suggestion'
                    name='roast_suggestion'
                    value={roast_suggestion}
                    onDOMChange={this.handleInputChange}
                    onSelect={this.handeSuggestionSelect}
                    suggestions={['Cinnamon', 'Light', 'City/Medium', 'Full City', 'Dark', 'French', 'Italian']}
                />
            </FormField>
            <FormField label='Variety' style={{margin: '10px'}}>
                <TextInput id='variety'
                    name='variety'
                    value={variety}
                    onDOMChange={this.handleInputChange}
                    onSelect={this.handeSuggestionSelect}
                    suggestions={['Africa and Yemen', 'Central America', 'Indonesia', 'South America', 'Blend']}
                />
            </FormField>
            <FormField label='Altitude' style={{margin: '10px'}}>
                <TextInput id='altitude'
                    name='altitude'
                    value={altitude}
                    onDOMChange={this.handleInputChange}
                    onSelect={this.handeSuggestionSelect}
                    suggestions={['900 - 1100 m', '1100 - 1600 m', '1600 - 2100 m']}
                />
            </FormField>
            <FormField label='Description' style={{margin: '10px'}}>
                <TextInput id='description'
                    name='description'
                    value={description}
                    onDOMChange={this.handleInputChange}
                />
            </FormField>
            <Footer pad={{vertical: 'medium'}}>
                <Button label='Submit'
                type='submit'
                primary={true}
                onClick={this.handleFormSubmit} />
            </Footer>
        </Form>
      );
    }
}

BeanForm.propTypes = {

};


//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(BeanForm);
