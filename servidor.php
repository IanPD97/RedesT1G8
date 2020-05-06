<?php
    header("Content-Type:application/json");
 

    if(isset($_REQUEST['nombres'],$_REQUEST['paterno'],$_REQUEST['materno'],$_REQUEST['genero']))
    {
        $genero = strtoupper($_REQUEST['genero']);
        if($genero == "M"){
            $genero = "Sr.";
        }
        else{
            $genero = "Sra.";
        }
        $nombres = ucwords(mb_strtolower($_REQUEST['nombres'],'UTF-8'));
        $paterno = ucwords(mb_strtolower($_REQUEST['paterno'],'UTF-8'));
        $materno = ucwords(mb_strtolower($_REQUEST['materno'],'UTF-8'));
        $nombreCompleto = $genero . " " . $nombres . " " . $paterno . " " . $materno;
        echo $nombreCompleto;

    }
    

    elseif(isset($_REQUEST['rut'])){
    }
    else{
        $nombreCompleto = "Error, no se encuentran datos.";

    }

?>
<?php
    //la función header envía los headers HTTP y asegura que el formato de los datos sea el adecuado
    header("Content-Type:application/json"); //respuesta http del body
    if(isset($_REQUEST['rut'],$_REQUEST['dig_verif']))
    {
        $auxiliarRut = $_REQUEST['rut']."-".$_REQUEST['dig_verif'];//guarda el rut ingresado en una variable
        $auxiliarRut2=$auxiliarRut;
        $rutCompleto = str_replace(".","",$auxiliarRut2);//quita los puntos 19.888.777-5 --> 19888777-5
        $rutSeparado = explode("-",$rutCompleto);//divide un string en varios strings, hace un array [0]=19888777//[1]=5
        $verificador = dv($rutSeparado[0]);//toma 19888777 y calcula el dv correcto con la función y lo almacena

        if ($verificador == $rutSeparado[1]){
            echo "El rut: ". $auxiliarRut. " es valido.";
        }
        else{
            echo "El rut: ". $auxiliarRut. " esta incorrecto.\n";
            echo "El digito verificador debería ser: ". $verificador;
        }
        //echo $verificador . "\n" . $rutCompleto;
       // URL para probar: http://localhost/2020%20REST/?rut=19556788-6

    }
    elseif (isset($_REQUEST['nombres'],$_REQUEST['paterno'],$_REQUEST['materno'],$_REQUEST['genero'])) {
    }
    else{
        echo "Error, no se encuentran datos.";
    }
    //$r=19552853
    //Se procede a tomar los números que componen el RUT de derecha a izquierda, y se multiplica cada dígito por los números que componen la serie numérica 2, 3, 4, 5, 6, y 7. Si se ha llegado al octavo número, se reinicia la serie a 2 nuevamente. 
    function dv($r){//funcion dv(digito verificador)
        $s=1;
        for($m=0;$r!=0;$r/=10)
            $s=($s+$r%10*(9-$m++%6))%11;
        return chr($s?$s+47:75);//chr devuelve un caracter
   }
?>
