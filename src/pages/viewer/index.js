<<<<<<< HEAD
import React from 'react';
import Sketchfab from '@sketchfab/viewer-api';

const MODEL_UID = "c632823b6c204797bd9b95dbd9f53a06";

const useSketchfabViewer = () => {
  // This ref will contain the actual iframe object
  const viewerIframeRef = React.useRef(null);
  const [api, setApi] = React.useState();

  const ViewerIframe = (
      <iframe
          // We feed the ref to the iframe component to get the underlying DOM object
          ref={viewerIframeRef}
          title="sketchfab-viewer"
          style={{ height: 400, width: 600 }}
      />
  );

  React.useEffect(
      () => {
        const version = '1.10.1';
        const uid = 'c9bbafb3ea9a44a1b30edfae8155c48c';
        const iframe = document.getElementById('api-frame');
        const client = new window.Sketchfab(version, iframe);
        let api;

        const error = err => console.error('Sketchfab API error:', err);
        const success = apiClient => { 
            api = apiClient;
            api.Start();
        }

        client.init(uid, {
            annotation: 0, // Usage: Setting to [1 – 100] will automatically load that annotation when the viewer starts.
            annotations_visible: 1, // Usage: Setting to 0 will hide annotations by default.
            autospin: 0, // Usage: Setting to any other number will cause the model to automatically spin around the z-axis after loading.
            autostart: 0, // Usage: Setting to 1 will make the model load immediately once the page is ready, rather than waiting for a user to click the Play button.
            cardboard: 0, // Usage: Start the viewer in stereoscopic VR Mode built for Google Cardboard and similar devices.
            camera: 1, // Usage: Setting to 0 will skip the initial animation that occurs when a model is loaded, and immediately show the model in its default position.
            preload: 1, // Usage: Setting to 1 will force all resources (textures) to download before the scene is displayed.
            ui_stop: 0, // Usage: Setting to 0 will hide the "Disable Viewer" button in the top right so that users cannot stop the 3D render once it is started.
            transparent: 0, // Usage: Setting to 1 will make the model's background transparent
            ui_animations: 0, // Usage: Setting to 0 will hide the animation menu and timeline.
            ui_annotations: 1, // Usage: Setting to 0 will hide the Annotation menu.
            ui_controls: 1, // Usage: Setting to 0 will hide all the viewer controls at the bottom of the viewer (Help, Settings, Inspector, VR, Fullscreen, Annotations, and Animations).
            ui_fullscreen: 1, // Usage: Setting to 0 will hide the Fullscreen button.
            ui_general_controls: 1, // Usage: Setting to 0 will hide main control buttons in the bottom right of the viewer (Help, Settings, Inspector, VR, Fullscreen).
            ui_help: 1, // Usage: Setting to 0 will hide the Help button.
            ui_hint: 1, // Usage: Setting to 0 will always hide the viewer hint animation ("click & hold to rotate"). Setting to 1 will show the hint the first time per browser session (using a cookie). Setting to 2 will always show the hint.
            ui_infos: 0, // Usage: Setting to 0 will hide the model info bar at the top of the viewer.
            ui_inspector: 0, // Usage: Setting to 0 will hide the inspector button.
            ui_settings: 0, // Usage: Setting to 0 will hide the Settings button.
            ui_vr: 0, // Usage: Setting to 0 will hide the View in VR button.
            ui_ar: 0, // Usage: Setting to 0 will hide the View in AR button.
            ui_watermark_link: 0, // Usage: Setting to 0 remove the link from the Sketchfab logo watermark.
            ui_color: '00a8c0', // Usage: Setting to a hexidecimal color code (without the #) or a HTML color name will change the color of the viewer loading bar.
            ui_watermark: 0, // Usage: Setting to 0 remove the Sketchfab logo watermark.
            navigation: 'orbit',
            annotation_cycle: 'off',
        
            success: success,
            error: error,
            version: version
          });
      },
      // We only want to initialize the viewer on first load, so we don't add any dependencies to useEffect
      []
  );

  return [ViewerIframe, api];
};

const Viewer = ({ apiRef }) => {
  const [ViewerIframe, api] = useSketchfabViewer();

  apiRef.current = api;

  return ViewerIframe;
};

export default Viewer;
=======
import React from 'react'

export default function Viewer(){
	return (
		<div>
			<h1>3D Viewer</h1>
			<h1>3D Viewer</h1>
		</div>	
	)
}
>>>>>>> 31b74e187097b55957009cded148917ccad9b1a2
