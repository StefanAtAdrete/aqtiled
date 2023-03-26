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

/* themes/contrib/bootstrap_barrio/templates/form/form-element.html.twig */
class __TwigTemplate_13c2eb8af69d95bcc8743c7cb944a9b7 extends \Twig\Template
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
        // line 47
        echo "
";
        // line 49
        $context["label_attributes"] = ((($context["label_attributes"] ?? null)) ? (($context["label_attributes"] ?? null)) : ($this->extensions['Drupal\Core\Template\TwigExtension']->createAttribute()));
        // line 51
        echo "
";
        // line 52
        if ((($context["type"] ?? null) == "checkbox")) {
            // line 53
            echo "  ";
            $context["wrapperclass"] = "form-check";
            // line 54
            echo "  ";
            $context["labelclass"] = "form-check-label";
            // line 55
            echo "  ";
            $context["inputclass"] = "form-check-input";
        }
        // line 57
        echo "
";
        // line 58
        if ((($context["type"] ?? null) == "radio")) {
            // line 59
            echo "  ";
            $context["wrapperclass"] = "form-check";
            // line 60
            echo "  ";
            $context["labelclass"] = "form-check-label";
            // line 61
            echo "  ";
            $context["inputclass"] = "form-check-input";
        }
        // line 63
        echo "
";
        // line 65
        $context["classes"] = [0 => "js-form-item", 1 => ("js-form-type-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(        // line 67
($context["type"] ?? null), 67, $this->source))), 2 => ((twig_in_filter(        // line 68
($context["type"] ?? null), [0 => "checkbox", 1 => "radio"])) ? (\Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(($context["type"] ?? null), 68, $this->source))) : (("form-type-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(($context["type"] ?? null), 68, $this->source))))), 3 => ((twig_in_filter(        // line 69
($context["type"] ?? null), [0 => "checkbox", 1 => "radio"])) ? (($context["wrapperclass"] ?? null)) : ("")), 4 => ((twig_in_filter(        // line 70
($context["type"] ?? null), [0 => "checkbox"])) ? ("mb-3") : ("")), 5 => ("js-form-item-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(        // line 71
($context["name"] ?? null), 71, $this->source))), 6 => ("form-item-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(        // line 72
($context["name"] ?? null), 72, $this->source))), 7 => ((!twig_in_filter(        // line 73
($context["title_display"] ?? null), [0 => "after", 1 => "before"])) ? ("form-no-label") : ("")), 8 => (((        // line 74
($context["disabled"] ?? null) == "disabled")) ? ("disabled") : ("")), 9 => ((        // line 75
($context["errors"] ?? null)) ? ("has-error") : (""))];
        // line 78
        echo "
";
        // line 79
        if ((($context["title_display"] ?? null) == "invisible")) {
            // line 80
            echo "  ";
            if (array_key_exists("labelclass", $context)) {
                // line 81
                echo "    ";
                $context["labelclass"] = ($this->sandbox->ensureToStringAllowed(($context["labelclass"] ?? null), 81, $this->source) . " visually-hidden");
                // line 82
                echo "  ";
            } else {
                // line 83
                echo "    ";
                $context["labelclass"] = "visually-hidden";
                // line 84
                echo "  ";
            }
        }
        // line 86
        echo "
";
        // line 88
        $context["description_classes"] = [0 => "description", 1 => "text-muted", 2 => (((        // line 91
($context["description_display"] ?? null) == "invisible")) ? ("visually-hidden") : (""))];
        // line 94
        if (twig_in_filter(($context["type"] ?? null), [0 => "checkbox", 1 => "radio"])) {
            // line 95
            echo "  <div";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 95), 95, $this->source), "html", null, true);
            echo ">
    ";
            // line 96
            if ( !twig_test_empty(($context["prefix"] ?? null))) {
                // line 97
                echo "      <span class=\"field-prefix\">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["prefix"] ?? null), 97, $this->source), "html", null, true);
                echo "</span>
    ";
            }
            // line 99
            echo "    ";
            if (((($context["description_display"] ?? null) == "before") && twig_get_attribute($this->env, $this->source, ($context["description"] ?? null), "content", [], "any", false, false, true, 99))) {
                // line 100
                echo "      <div";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["description"] ?? null), "attributes", [], "any", false, false, true, 100), 100, $this->source), "html", null, true);
                echo ">
        ";
                // line 101
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["description"] ?? null), "content", [], "any", false, false, true, 101), 101, $this->source), "html", null, true);
                echo "
      </div>
    ";
            }
            // line 104
            echo "    ";
            if (twig_in_filter(($context["label_display"] ?? null), [0 => "before", 1 => "invisible"])) {
                // line 105
                echo "      <label ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["label_attributes"] ?? null), "addClass", [0 => ($context["labelclass"] ?? null)], "method", false, false, true, 105), "setAttribute", [0 => "for", 1 => twig_get_attribute($this->env, $this->source, ($context["input_attributes"] ?? null), "id", [], "any", false, false, true, 105)], "method", false, false, true, 105), 105, $this->source), "html", null, true);
                echo ">
        ";
                // line 106
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(($context["input_title"] ?? null), 106, $this->source));
                echo "
      </label>
    ";
            }
            // line 109
            echo "    <input";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["input_attributes"] ?? null), "addClass", [0 => ($context["inputclass"] ?? null)], "method", false, false, true, 109), 109, $this->source), "html", null, true);
            echo ">
    ";
            // line 110
            if ((($context["label_display"] ?? null) == "after")) {
                // line 111
                echo "      <label ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["label_attributes"] ?? null), "addClass", [0 => ($context["labelclass"] ?? null)], "method", false, false, true, 111), "setAttribute", [0 => "for", 1 => twig_get_attribute($this->env, $this->source, ($context["input_attributes"] ?? null), "id", [], "any", false, false, true, 111)], "method", false, false, true, 111), 111, $this->source), "html", null, true);
                echo ">
        ";
                // line 112
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(($context["input_title"] ?? null), 112, $this->source));
                echo "
      </label>
    ";
            }
            // line 115
            echo "    ";
            if ( !twig_test_empty(($context["suffix"] ?? null))) {
                // line 116
                echo "      <span class=\"field-suffix\">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["suffix"] ?? null), 116, $this->source), "html", null, true);
                echo "</span>
    ";
            }
            // line 118
            echo "    ";
            if (($context["errors"] ?? null)) {
                // line 119
                echo "      <div class=\"invalid-feedback\">
        ";
                // line 120
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["errors"] ?? null), 120, $this->source), "html", null, true);
                echo "
      </div>
    ";
            }
            // line 123
            echo "    ";
            if ((twig_in_filter(($context["description_display"] ?? null), [0 => "after", 1 => "invisible"]) && twig_get_attribute($this->env, $this->source, ($context["description"] ?? null), "content", [], "any", false, false, true, 123))) {
                // line 124
                echo "      <small";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["description"] ?? null), "attributes", [], "any", false, false, true, 124), "addClass", [0 => ($context["description_classes"] ?? null)], "method", false, false, true, 124), 124, $this->source), "html", null, true);
                echo ">
        ";
                // line 125
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["description"] ?? null), "content", [], "any", false, false, true, 125), 125, $this->source), "html", null, true);
                echo "
      </small>
    ";
            }
            // line 128
            echo "  </div>
";
        } else {
            // line 130
            echo "  <div";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null), 1 => "mb-3", 2 => ((($context["float_label"] ?? null)) ? ("form-floating") : (""))], "method", false, false, true, 130), 130, $this->source), "html", null, true);
            echo ">
    ";
            // line 131
            if (twig_in_filter(($context["label_display"] ?? null), [0 => "before", 1 => "invisible"])) {
                // line 132
                echo "      ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["label"] ?? null), 132, $this->source), "html", null, true);
                echo "
    ";
            }
            // line 134
            echo "    ";
            if (( !twig_test_empty(($context["prefix"] ?? null)) ||  !twig_test_empty(($context["suffix"] ?? null)))) {
                // line 135
                echo "      <div class=\"input-group";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(((($context["errors"] ?? null)) ? (" is-invalid") : ("")));
                echo "\">
    ";
            }
            // line 137
            echo "    ";
            if ( !twig_test_empty(($context["prefix"] ?? null))) {
                // line 138
                echo "      <div class=\"input-group-prepend\">
        <span class=\"field-prefix input-group-text\">";
                // line 139
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["prefix"] ?? null), 139, $this->source), "html", null, true);
                echo "</span>
      </div>
    ";
            }
            // line 142
            echo "    ";
            if (((($context["description_display"] ?? null) == "before") && twig_get_attribute($this->env, $this->source, ($context["description"] ?? null), "content", [], "any", false, false, true, 142))) {
                // line 143
                echo "      <div";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["description"] ?? null), "attributes", [], "any", false, false, true, 143), 143, $this->source), "html", null, true);
                echo ">
        ";
                // line 144
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["description"] ?? null), "content", [], "any", false, false, true, 144), 144, $this->source), "html", null, true);
                echo "
      </div>
    ";
            }
            // line 147
            echo "    ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["children"] ?? null), 147, $this->source), "html", null, true);
            echo "
    ";
            // line 148
            if ( !twig_test_empty(($context["suffix"] ?? null))) {
                // line 149
                echo "      <div class=\"input-group-append\">
        <span class=\"field-suffix input-group-text\">";
                // line 150
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["suffix"] ?? null), 150, $this->source), "html", null, true);
                echo "</span>
      </div>
    ";
            }
            // line 153
            echo "    ";
            if (( !twig_test_empty(($context["prefix"] ?? null)) ||  !twig_test_empty(($context["suffix"] ?? null)))) {
                // line 154
                echo "      </div>
    ";
            }
            // line 156
            echo "    ";
            if ((($context["label_display"] ?? null) == "after")) {
                // line 157
                echo "      ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["label"] ?? null), 157, $this->source), "html", null, true);
                echo "
    ";
            }
            // line 159
            echo "    ";
            if (($context["errors"] ?? null)) {
                // line 160
                echo "      <div class=\"invalid-feedback\">
        ";
                // line 161
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["errors"] ?? null), 161, $this->source), "html", null, true);
                echo "
      </div>
    ";
            }
            // line 164
            echo "    ";
            if ((twig_in_filter(($context["description_display"] ?? null), [0 => "after", 1 => "invisible"]) && twig_get_attribute($this->env, $this->source, ($context["description"] ?? null), "content", [], "any", false, false, true, 164))) {
                // line 165
                echo "      <small";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["description"] ?? null), "attributes", [], "any", false, false, true, 165), "addClass", [0 => ($context["description_classes"] ?? null)], "method", false, false, true, 165), 165, $this->source), "html", null, true);
                echo ">
        ";
                // line 166
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["description"] ?? null), "content", [], "any", false, false, true, 166), 166, $this->source), "html", null, true);
                echo "
      </small>
    ";
            }
            // line 169
            echo "  </div>
";
        }
    }

    public function getTemplateName()
    {
        return "themes/contrib/bootstrap_barrio/templates/form/form-element.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  321 => 169,  315 => 166,  310 => 165,  307 => 164,  301 => 161,  298 => 160,  295 => 159,  289 => 157,  286 => 156,  282 => 154,  279 => 153,  273 => 150,  270 => 149,  268 => 148,  263 => 147,  257 => 144,  252 => 143,  249 => 142,  243 => 139,  240 => 138,  237 => 137,  231 => 135,  228 => 134,  222 => 132,  220 => 131,  215 => 130,  211 => 128,  205 => 125,  200 => 124,  197 => 123,  191 => 120,  188 => 119,  185 => 118,  179 => 116,  176 => 115,  170 => 112,  165 => 111,  163 => 110,  158 => 109,  152 => 106,  147 => 105,  144 => 104,  138 => 101,  133 => 100,  130 => 99,  124 => 97,  122 => 96,  117 => 95,  115 => 94,  113 => 91,  112 => 88,  109 => 86,  105 => 84,  102 => 83,  99 => 82,  96 => 81,  93 => 80,  91 => 79,  88 => 78,  86 => 75,  85 => 74,  84 => 73,  83 => 72,  82 => 71,  81 => 70,  80 => 69,  79 => 68,  78 => 67,  77 => 65,  74 => 63,  70 => 61,  67 => 60,  64 => 59,  62 => 58,  59 => 57,  55 => 55,  52 => 54,  49 => 53,  47 => 52,  44 => 51,  42 => 49,  39 => 47,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/contrib/bootstrap_barrio/templates/form/form-element.html.twig", "/app/public_html/themes/contrib/bootstrap_barrio/templates/form/form-element.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 49, "if" => 52);
        static $filters = array("clean_class" => 67, "escape" => 95, "raw" => 106);
        static $functions = array("create_attribute" => 49);

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if'],
                ['clean_class', 'escape', 'raw'],
                ['create_attribute']
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
