import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  home_screen_container
  : {
    flex: 1,
    backgroundColor: '#2c3e50', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  auth0_login_background: {
    backgroundColor: 'rgba(255, 255, 255, 0.75)', 
    borderRadius: 15,
    padding: 30,
    alignItems: 'center',
    width: '100%',
    maxWidth: 300,
  },
  auth0_login_title
  : {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2c3e50',
  },
  subauth0_login_title
  : {
    fontSize: 16,
    fontFamily: 'System',
    marginBottom: 30,
    color: '#414546ff',
  },
  authenticated_homescreen_title: {
    fontSize: 2,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#27ae60',
  },
  email: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 20,
  },
  loadingText: {
    marginTop: 10,
    color: '#7f8c8d',
  },
  auth0_login_button: {
    backgroundColor: '#9fa1a3ff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 2,
  },
   maps_container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  maps_header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50, 
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: '#4a4a4a',
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  maps_header_title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  maps_placeholder: {
    width: 60, 
  },
  map: {
    flex: 1,
  },
  bottomPanel: {
    position: 'absolute',
    bottom: 50,
    left: 16,
    right: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 16,
    borderRadius: 12,
  },
  welcomeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  maps_bottom_info_text: {
    color: '#ccc',
    fontSize: 14,
  },
});

