import React from 'react';
import { Modal, View } from 'react-native';
import RatingScale from './RatingScale';
import { Text, Heading, Button } from './CustomComponents';
import styles from '../styles/_components/RatingModal';

class RatingModal extends React.Component {
  constructor() {
    super();
    this.state = {
      credible: 5,
      accurate: 5,
      relevant: 5
    }
  }

  render() {
    return (
      <Modal
        visible={this.props.showModal}
        transparent={true}
        animationType='slide'
        onRequestClose={this.props.closeModal}
      >
        <View style={styles.container}>
          <View style={styles.modal}>
            <Heading>Rate this Article</Heading>

            <Text>This article is credible.</Text>
            <RatingScale 
              currentValue={this.state.credible}
              ratingPress={rating => this.setState({ credible: rating })} />

            <Text>This article is accurate.</Text>
            <RatingScale 
              currentValue={this.state.accurate} 
              ratingPress={rating => this.setState({ accurate: rating })} />

            <Text>This article is relevant.</Text>
            <RatingScale 
              currentValue={this.state.relevant}
              ratingPress={rating => this.setState({ relevant: rating })} />

            <View style={{flexDirection: 'row', width: '95%'}}>
              <Button text='Submit' />
              <Button text='Cancel' onPress={this.props.closeModal} />
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}

export default RatingModal;