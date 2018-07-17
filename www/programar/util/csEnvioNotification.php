<?php


class csEnvioNotification
{
	function enviar($titulo,$body,$token)
	{
		// API access key from Google API's Console
			// API access key from Google API's Console
		// API access key from Google API's Console
		define( 'API_ACCESS_KEY', 'TU API KEY');

		$registrationIds = [$token];


		// prep the bundle
		$msg = [
    		'title'         => $titulo,
			'body'          => $body
		];

			$fields = [
			'registration_ids'  => $registrationIds,
			'notification'              => $msg
			];

		$headers = [
   		 'Authorization: key=' . API_ACCESS_KEY,
    		'Content-Type: application/json'
		];
		$fields = json_encode( $fields );

		$ch = curl_init();
		curl_setopt( $ch,CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send' );
		curl_setopt( $ch,CURLOPT_POST, true );
		curl_setopt( $ch,CURLOPT_HTTPHEADER, $headers );
		curl_setopt( $ch,CURLOPT_RETURNTRANSFER, true );
		curl_setopt( $ch,CURLOPT_SSL_VERIFYPEER, false );
		classurl_setopt( $ch,CURLOPT_POSTFIELDS, $fields );
		$result = curl_exec($ch );
		curl_close( $ch );

		echo $result;
	}
	
}


?>