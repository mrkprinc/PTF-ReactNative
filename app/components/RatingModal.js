import React from 'react';
import { Modal, View } from 'react-native';
import RatingScale from './RatingScale';
import { Text, Heading, Button } from './CustomComponents';
import styles from '../styles/_components/RatingModal';

const RatingModal = props => {
  return (
    <Modal
      visible={props.show}
      transparent={true}
      animationType='slide'
      onRequestClose={props.closeModal}
    >
      <View style={styles.container}>
        <View style={styles.modal}>
          <Heading>Rate this Article</Heading>

          <Text>This article is credible.</Text>
          <RatingScale 
            currentValue={props.ratings.credible}
            ratingPress={rating => props.setRating('credible', rating)} />

          <Text>This article is accurate.</Text>
          <RatingScale 
            currentValue={props.ratings.accurate} 
            ratingPress={rating => props.setRating('accurate', rating)} />

          <Text>This article is relevant.</Text>
          <RatingScale 
            currentValue={props.ratings.relevant}
            ratingPress={rating => props.setRating('relevant', rating)} />

          <View style={{flexDirection: 'row', width: '95%'}}>
            <Button text='Submit' onPress={() => {
              let ratingsData = {
                source: props.source,
                url: props.url,
                credible: props.ratings.credible,
                accurate: props.ratings.accurate,
                relevant: props.ratings.relevant
              }
              props.submitRatings(ratingsData);
            }} />
            <Button text='Cancel' onPress={props.closeModal} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default RatingModal;