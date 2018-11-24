import React from 'react';
import { Modal, View } from 'react-native';
import { Text, Heading, Button } from './CustomComponents';
import styles from '../styles/_components/RatingModal';

class RatingModal extends React.Component {
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
            <Text>This is the rating modal.</Text>
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