<?php

// send request to mailchimp
function send_mail( $request ) {
	$data = $request->get_json_params();
    $email = $data['email'];
    $list_id = MAILCHIMP_LIST_ID;
    $api_key = MAILCHIMP_KEY;
    $data_center = substr($api_key,strpos($api_key,'-')+1);
    $url = 'https://'. $data_center .'.api.mailchimp.com/3.0/lists/'. $list_id .'/members';
    $json = json_encode([
        'email_address' => $email,
        'status'  => 'subscribed',
        'merge_fields' => ['INDUSTRY' => $data['industry'], 'BUSINESS' => $data['business']],
    ]);
    
    try {
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_USERPWD, 'user:' . $api_key);
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 10);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
        $result = curl_exec($ch);
        $status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        if (200 == $status_code) {
            return new WP_REST_Response(array("title" => "Success", "detail" => "Thank you for subscribing!"), $status_code);
        } else {
            $result = json_decode($result);
            return new WP_Error( $status_code, '', $result );
        }
    } catch(Exception $e) {
        return json_encode(['error' => $e->getMessage()]);
    }
  }

  // listen 
  add_action( 'rest_api_init', function () {
	register_rest_route( 'wp/v2', '/send-mail/', array(
	  'methods' => 'POST',
	  'callback' => 'send_mail',
	  ''
	) );
  } );
?>