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

/* __string_template__498be0a09cb7e6f6d750da2d1042859a */
class __TwigTemplate_b0df1f232a07885635ab99ace5dee350 extends \Twig\Template
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
        echo "IP: ";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_ip"] ?? null), 1, $this->source), "html", null, true);
        echo "<br>
Max load ampere: ";
        // line 2
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field__max_load_ampere_a_"] ?? null), 2, $this->source), "html", null, true);
        echo "<br>
Nominal voltage: ";
        // line 3
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field__nominal_voltage"] ?? null), 3, $this->source), "html", null, true);
        echo "<br>
Performance temperature: ";
        // line 4
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field__performance_temp_tp_"] ?? null), 4, $this->source), "html", null, true);
        echo "<br>
Ambient temperature range: ";
        // line 5
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_ambient_temperature_range"] ?? null), 5, $this->source), "html", null, true);
        echo "<br>
Casing material: ";
        // line 6
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_casing_material"] ?? null), 6, $this->source), "html", null, true);
        echo "<br>
Endcap material: ";
        // line 7
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_endcap_material"] ?? null), 7, $this->source), "html", null, true);
        echo "<br>
Energy efficiency class: ";
        // line 8
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_energy_efficiency_class"] ?? null), 8, $this->source), "html", null, true);
        echo "<br>
Integrated thermal fuse: ";
        // line 9
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_integrated_thermal_fuse"] ?? null), 9, $this->source), "html", null, true);
        echo "<br>
L80 service life: ";
        // line 10
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_l80_service_life"] ?? null), 10, $this->source), "html", null, true);
        echo "<br>
Power factor: ";
        // line 11
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_power_factor"] ?? null), 11, $this->source), "html", null, true);
        echo "<br>
Replaceble ledmodules and driver: ";
        // line 12
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_replaceable_ledmodules_and"] ?? null), 12, $this->source), "html", null, true);
        echo "<br>
SDCM colour tolerance: ";
        // line 13
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_sdcm_colour_tolerance"] ?? null), 13, $this->source), "html", null, true);
        echo "<br>
Wireless protocols: ";
        // line 14
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_wireless_protocols"] ?? null), 14, $this->source), "html", null, true);
        echo "<br>";
    }

    public function getTemplateName()
    {
        return "__string_template__498be0a09cb7e6f6d750da2d1042859a";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  92 => 14,  88 => 13,  84 => 12,  80 => 11,  76 => 10,  72 => 9,  68 => 8,  64 => 7,  60 => 6,  56 => 5,  52 => 4,  48 => 3,  44 => 2,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{# inline_template_start #}IP: {{ field_ip }}<br>
Max load ampere: {{ field__max_load_ampere_a_ }}<br>
Nominal voltage: {{ field__nominal_voltage }}<br>
Performance temperature: {{ field__performance_temp_tp_ }}<br>
Ambient temperature range: {{ field_ambient_temperature_range }}<br>
Casing material: {{ field_casing_material }}<br>
Endcap material: {{ field_endcap_material }}<br>
Energy efficiency class: {{ field_energy_efficiency_class }}<br>
Integrated thermal fuse: {{ field_integrated_thermal_fuse }}<br>
L80 service life: {{ field_l80_service_life }}<br>
Power factor: {{ field_power_factor }}<br>
Replaceble ledmodules and driver: {{ field_replaceable_ledmodules_and }}<br>
SDCM colour tolerance: {{ field_sdcm_colour_tolerance }}<br>
Wireless protocols: {{ field_wireless_protocols }}<br>", "__string_template__498be0a09cb7e6f6d750da2d1042859a", "");
    }
    
    public function checkSecurity()
    {
        static $tags = array();
        static $filters = array("escape" => 1);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                [],
                ['escape'],
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
