import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, Pressable, Image, Dimensions } from 'react-native';

import { songs } from './data/songs.js';

import AddIcon from './assets/add_btn.svg';
import ArrowDownIcon from './assets/arrow_down_btn.svg';
import BackIcon from './assets/back_btn.svg';
import CheckIcon from './assets/check_btn.svg';
import DeviceIcon from './assets/device_btn.svg';
import ExplicitSign from './assets/explicit_sign.svg';
import InfoIcon from './assets/info_btn.svg';
import NextIcon from './assets/next_btn.svg';
import PauseIcon from './assets/pause_btn.svg';
import PlayIcon from './assets/play_btn.svg';
import ProgressBarIcon from './assets/progress_bar.svg';
import QueueIcon from './assets/queue_btn.svg';
import ReplayIcon from './assets/replay_btn.svg';
import ShuffleIcon from './assets/shuffle_btn.svg';
import UploadIcon from './assets/upload_btn.svg';

const { width } = Dimensions.get('window');

export default function App() {
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const track = songs[trackIndex];

  const handlePrev = () => {
    setTrackIndex((index) => (index - 1 + songs.length) % songs.length);
  };

  const handleNext = () => {
    setTrackIndex((index) => (index + 1) % songs.length);
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: track.bgColor }]}>
      <StatusBar barStyle="light-content" backgroundColor={track.bgColor} />
      
      <View style={styles.container}>
        <View style={styles.header}>
          <ArrowDownIcon width={20} height={20} />
          <Text style={styles.headerTitle}>Liked Songs</Text>
          <InfoIcon width={16} height={16} />
        </View>

        <View style={styles.albumArtContainer}>
          <Image source={track.cover} style={styles.albumArt} />
        </View>

        <View style={styles.trackInfoContainer}>
          <View style={styles.trackTextContainer}>
            <Text style={styles.trackTitle} numberOfLines={1}>
              {track.title}
            </Text>
            <View style={styles.artistRow}>
              {track.explicit && <ExplicitSign width={14} height={14} />}
              <Text style={styles.trackArtist}>{track.artist}</Text>
            </View>
          </View>

          {track.saved ? <CheckIcon width={26} height={26} /> : <AddIcon width={26} height={26} />}
        </View>

        <View style={styles.progressContainer}>
          <ProgressBarIcon width="100%" height={36} />
        </View>

        <View style={styles.controlsContainer}>
          <ShuffleIcon width={26} height={26} />

          <Pressable onPress={handlePrev} style={styles.controlButton}>
            <BackIcon width={40} height={40} />
          </Pressable>

          <Pressable onPress={() => setIsPlaying((value) => !value)} style={styles.playPauseButton}>
            {isPlaying ? <PauseIcon width={70} height={70} /> : <PlayIcon width={70} height={70} />}
          </Pressable>

          <Pressable onPress={handleNext} style={styles.controlButton}>
            <NextIcon width={40} height={40} />
          </Pressable>

          <ReplayIcon width={22} height={22} />
        </View>

        <View style={styles.bottomBar}>
          <DeviceIcon width={18} height={18} />
          <View style={styles.rightIcons}>
            <UploadIcon width={18} height={18} />
            <QueueIcon width={18} height={18} />
          </View>
        </View>

        <View style={styles.liveBanner}>
          <Text style={styles.liveBannerText}>{track.bannerText}</Text>
          {track.bannerAction && <Text style={styles.seeAllText}>{track.bannerAction}</Text>}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  container: {
    flex: 1,
    paddingHorizontal: 24,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 8,
  },

  headerTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
  },

  albumArtContainer: {
    alignItems: 'center',
    marginTop: 44,
    marginBottom: 50,
  },

  albumArt: {
    width: width - 48,
    height: width - 48,
    borderRadius: 4,
  },

  trackInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  trackTextContainer: {
    flex: 1,
    marginRight: 12,
  },

  trackTitle: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 6,
  },

  artistRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  trackArtist: {
    color: '#e2e4ea',
    fontSize: 16,
    fontWeight: '500',
  },

  progressContainer: {
    marginTop: 12,
  },

  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  controlButton: {
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },

  playPauseButton: {
    width: 84,
    height: 84,
    borderRadius: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 26,
  },

  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },

  liveBanner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.25)',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingTop: 16,
    height: 150,
  },

  liveBannerText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },

  seeAllText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});
