<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* modules/contrib/bootstrap_styles/images/ui/settings.svg */
class __TwigTemplate_9277a70f4c42fc2cba195bcc825e2b2f extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo "<svg height=\"300\" width=\"300\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\">
    <path d=\"M16 9a7 7 0 107 7 7 7 0 00-7-7zm0 12a5 5 0 115-5 5 5 0 01-5 5z\"/>
    <path d=\"M28.78 12h-1.47c-.14-.4-.31-.79-.48-1.17l1-1a2.22 2.22 0 000-3.14l-2.48-2.55a2.27 2.27 0 00-3.14 0l-1 1c-.42-.14-.81-.31-1.21-.45V3.22A2.23 2.23 0 0017.78 1h-3.56A2.23 2.23 0 0012 3.22v1.47c-.4.14-.79.31-1.17.48l-1-1a2.27 2.27 0 00-3.14 0L4.14 6.65a2.22 2.22 0 000 3.14l1 1c-.17.38-.34.77-.48 1.17H3.22A2.23 2.23 0 001 14.22v3.56A2.23 2.23 0 003.22 20h1.47c.14.4.31.79.48 1.17l-1 1a2.22 2.22 0 000 3.14l2.51 2.51a2.27 2.27 0 003.14 0l1-1c.38.17.77.34 1.17.48v1.47A2.23 2.23 0 0014.22 31h3.56A2.23 2.23 0 0020 28.78v-1.47c.4-.14.79-.31 1.17-.48l1 1a2.27 2.27 0 003.14 0l2.51-2.51a2.22 2.22 0 000-3.14l-1-1c.17-.38.34-.77.48-1.17h1.47A2.23 2.23 0 0031 17.78v-3.56A2.23 2.23 0 0028.78 12zm.22 5.78a.22.22 0 01-.22.22h-2.2a1 1 0 00-1 .73 9.63 9.63 0 01-.88 2.14 1 1 0 00.17 1.2l1.55 1.55a.22.22 0 010 .32l-2.51 2.51a.2.2 0 01-.32 0l-1.55-1.56a1 1 0 00-1.2-.16 9.63 9.63 0 01-2.14.88 1 1 0 00-.73 1v2.2a.22.22 0 01-.22.22h-3.53a.22.22 0 01-.22-.22v-2.2a1 1 0 00-.73-1 9.63 9.63 0 01-2.14-.88 1 1 0 00-.49-.13 1 1 0 00-.71.29l-1.55 1.56a.2.2 0 01-.32 0l-2.51-2.51a.22.22 0 010-.32l1.55-1.55a1 1 0 00.17-1.2 9.63 9.63 0 01-.88-2.14 1 1 0 00-1-.73H3.22a.22.22 0 01-.22-.22v-3.56a.22.22 0 01.22-.22h2.2a1 1 0 001-.73 9.63 9.63 0 01.88-2.14 1 1 0 00-.17-1.2L5.55 8.38a.22.22 0 010-.32l2.51-2.51a.2.2 0 01.32 0l1.55 1.56a1 1 0 001.2.16 9.63 9.63 0 012.14-.88 1 1 0 00.73-1V3.22a.22.22 0 01.22-.22h3.56a.22.22 0 01.22.22v2.2a1 1 0 00.73 1 9.63 9.63 0 012.14.88 1 1 0 001.2-.16l1.55-1.56a.2.2 0 01.32 0l2.51 2.51a.22.22 0 010 .32L24.9 9.93a1 1 0 00-.17 1.2 9.63 9.63 0 01.88 2.14 1 1 0 001 .73h2.2a.22.22 0 01.22.22z\"/>
</svg>";
    }

    public function getTemplateName()
    {
        return "modules/contrib/bootstrap_styles/images/ui/settings.svg";
    }

    public function getDebugInfo()
    {
        return array (  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<svg height=\"300\" width=\"300\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\">
    <path d=\"M16 9a7 7 0 107 7 7 7 0 00-7-7zm0 12a5 5 0 115-5 5 5 0 01-5 5z\"/>
    <path d=\"M28.78 12h-1.47c-.14-.4-.31-.79-.48-1.17l1-1a2.22 2.22 0 000-3.14l-2.48-2.55a2.27 2.27 0 00-3.14 0l-1 1c-.42-.14-.81-.31-1.21-.45V3.22A2.23 2.23 0 0017.78 1h-3.56A2.23 2.23 0 0012 3.22v1.47c-.4.14-.79.31-1.17.48l-1-1a2.27 2.27 0 00-3.14 0L4.14 6.65a2.22 2.22 0 000 3.14l1 1c-.17.38-.34.77-.48 1.17H3.22A2.23 2.23 0 001 14.22v3.56A2.23 2.23 0 003.22 20h1.47c.14.4.31.79.48 1.17l-1 1a2.22 2.22 0 000 3.14l2.51 2.51a2.27 2.27 0 003.14 0l1-1c.38.17.77.34 1.17.48v1.47A2.23 2.23 0 0014.22 31h3.56A2.23 2.23 0 0020 28.78v-1.47c.4-.14.79-.31 1.17-.48l1 1a2.27 2.27 0 003.14 0l2.51-2.51a2.22 2.22 0 000-3.14l-1-1c.17-.38.34-.77.48-1.17h1.47A2.23 2.23 0 0031 17.78v-3.56A2.23 2.23 0 0028.78 12zm.22 5.78a.22.22 0 01-.22.22h-2.2a1 1 0 00-1 .73 9.63 9.63 0 01-.88 2.14 1 1 0 00.17 1.2l1.55 1.55a.22.22 0 010 .32l-2.51 2.51a.2.2 0 01-.32 0l-1.55-1.56a1 1 0 00-1.2-.16 9.63 9.63 0 01-2.14.88 1 1 0 00-.73 1v2.2a.22.22 0 01-.22.22h-3.53a.22.22 0 01-.22-.22v-2.2a1 1 0 00-.73-1 9.63 9.63 0 01-2.14-.88 1 1 0 00-.49-.13 1 1 0 00-.71.29l-1.55 1.56a.2.2 0 01-.32 0l-2.51-2.51a.22.22 0 010-.32l1.55-1.55a1 1 0 00.17-1.2 9.63 9.63 0 01-.88-2.14 1 1 0 00-1-.73H3.22a.22.22 0 01-.22-.22v-3.56a.22.22 0 01.22-.22h2.2a1 1 0 001-.73 9.63 9.63 0 01.88-2.14 1 1 0 00-.17-1.2L5.55 8.38a.22.22 0 010-.32l2.51-2.51a.2.2 0 01.32 0l1.55 1.56a1 1 0 001.2.16 9.63 9.63 0 012.14-.88 1 1 0 00.73-1V3.22a.22.22 0 01.22-.22h3.56a.22.22 0 01.22.22v2.2a1 1 0 00.73 1 9.63 9.63 0 012.14.88 1 1 0 001.2-.16l1.55-1.56a.2.2 0 01.32 0l2.51 2.51a.22.22 0 010 .32L24.9 9.93a1 1 0 00-.17 1.2 9.63 9.63 0 01.88 2.14 1 1 0 001 .73h2.2a.22.22 0 01.22.22z\"/>
</svg>", "modules/contrib/bootstrap_styles/images/ui/settings.svg", "/app/public_html/modules/contrib/bootstrap_styles/images/ui/settings.svg");
    }
    
    public function checkSecurity()
    {
        static $tags = array();
        static $filters = array();
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                [],
                [],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
